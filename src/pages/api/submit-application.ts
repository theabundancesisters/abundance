import type { APIRoute } from "astro";

export const prerender = false;

const KAJABI_FORM_URL = "https://www.theleadingedge.life/forms/2148718151";

/** Grab a fresh Kajabi CSRF token from the form page */
async function getKajabiToken(): Promise<string> {
  const res  = await fetch(KAJABI_FORM_URL, { headers: { Accept: "text/html" } });
  const html = await res.text();
  const match = html.match(/name="authenticity_token"[^>]*value="([^"]+)"/);
  if (!match) throw new Error("Could not find Kajabi authenticity_token");
  return match[1];
}

/** Submit to Kajabi "Opt-in Career" form */
async function submitToKajabi(fields: {
  firstName: string; lastName: string; email: string; phone: string;
  occupation: string; frustration: string; helpWith: string;
}): Promise<void> {
  const token = await getKajabiToken();

  const body = new URLSearchParams({
    authenticity_token:              token,
    "form_submission[custom_10]":    fields.firstName,
    "form_submission[custom_11]":    fields.lastName,
    "form_submission[email]":        fields.email,
    "form_submission[phone_number]": fields.phone,
    "form_submission[custom_22]":    fields.occupation,
    "form_submission[custom_17]":    fields.frustration,
    "form_submission[custom_28]":    fields.helpWith,
  });

  const res = await fetch(`${KAJABI_FORM_URL}/form_submissions`, {
    method: "POST",
    headers: {
      "Content-Type":     "application/x-www-form-urlencoded",
      Accept:             "application/json, text/javascript",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kajabi submit failed ${res.status}: ${text.slice(0, 300)}`);
  }
}

/** Upsert contact in GHL and add a note with full application details */
async function submitToGHL(
  apiKey: string,
  locationId: string,
  qualified: boolean,
  fields: {
    firstName: string; lastName: string; email: string; phone: string;
    occupation: string; frustration: string; helpWith: string;
  }
): Promise<void> {
  // 1. Upsert contact
  const upsertRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: {
      Authorization:  `Bearer ${apiKey}`,
      Version:        "2021-07-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locationId,
      firstName: fields.firstName,
      lastName:  fields.lastName,
      email:     fields.email,
      phone:     fields.phone,
      tags:      ["career-crossroads", qualified ? "cc-qualified" : "cc-not-qualified"],
      source:    "Career Crossroads Landing Page",
    }),
  });

  if (!upsertRes.ok) {
    const text = await upsertRes.text();
    throw new Error(`GHL upsert failed ${upsertRes.status}: ${text.slice(0, 300)}`);
  }

  const upsertData = await upsertRes.json();
  const contactId  = upsertData.contact?.id;

  if (!contactId) return;

  // 2. Add note with full application answers
  await fetch(`https://services.leadconnectorhq.com/contacts/${contactId}/notes`, {
    method: "POST",
    headers: {
      Authorization:  `Bearer ${apiKey}`,
      Version:        "2021-07-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      body: [
        "Career Crossroads Application",
        "─────────────────────────────",
        `Occupation: ${fields.occupation}`,
        `Frustration Score: ${fields.frustration}/10`,
        `What they need help with:\n${fields.helpWith}`,
        `Qualification: ${qualified ? "✅ Qualified (7+)" : "⚠️ Not yet qualified (<7)"}`,
      ].join("\n"),
      userId: contactId,
    }),
  });
}

export const POST: APIRoute = async ({ request }) => {
  const headers = { "Content-Type": "application/json" };

  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), { status: 400, headers });
  }

  const { firstName, lastName, email, phone, occupation, frustration, helpWith } = body;

  if (!firstName || !lastName || !email || !phone || !occupation || !frustration || !helpWith) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers });
  }

  const apiKey     = import.meta.env.GHL_API_KEY;
  const locationId = import.meta.env.GHL_LOCATION_ID;
  const score      = parseInt(frustration, 10);
  const qualified  = score >= 7;
  const fields     = { firstName, lastName, email, phone, occupation, frustration, helpWith };

  if (!locationId) {
    console.error("GHL_LOCATION_ID env var is not set — skipping GHL submission");
  }

  // Fire both in parallel — neither blocks the user redirect
  const [ghlResult, kajabiResult] = await Promise.allSettled([
    locationId
      ? submitToGHL(apiKey, locationId, qualified, fields)
      : Promise.reject(new Error("GHL_LOCATION_ID not configured")),
    submitToKajabi(fields),
  ]);

  if (ghlResult.status    === "rejected") console.error("GHL error:",    ghlResult.reason?.message ?? ghlResult.reason);
  if (kajabiResult.status === "rejected") console.error("Kajabi error:", kajabiResult.reason?.message ?? kajabiResult.reason);

  return new Response(JSON.stringify({ success: true, qualified }), { status: 200, headers });
};
