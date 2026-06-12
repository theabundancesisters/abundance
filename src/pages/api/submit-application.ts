import type { APIRoute } from "astro";

export const prerender = false;

const KAJABI_FORM_URL = "https://www.theleadingedge.life/forms/2148718151";

/** Submit to Kajabi "Opt-in Career" form */
async function submitToKajabi(fields: {
  firstName: string; lastName: string; email: string; phone: string;
  occupation: string; frustration: string; helpWith: string; incomeRange: string;
}): Promise<void> {
  // Try without CSRF token first (works for server-side embed requests)
  const body = new URLSearchParams({
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
      Accept:             "application/json, text/javascript, */*",
      "X-Requested-With": "XMLHttpRequest",
      Referer:            KAJABI_FORM_URL,
      Origin:             "https://www.theleadingedge.life",
    },
    body: body.toString(),
  });

  // If CSRF required, fetch token and retry
  if (res.status === 422 || res.status === 403) {
    const pageRes  = await fetch(KAJABI_FORM_URL, { headers: { Accept: "text/html" } });
    const html     = await pageRes.text();
    const match    = html.match(/name="authenticity_token"[^>]*value="([^"]+)"/);
    if (!match) throw new Error("Could not find Kajabi CSRF token");

    body.set("authenticity_token", match[1]);
    const retryRes = await fetch(`${KAJABI_FORM_URL}/form_submissions`, {
      method: "POST",
      headers: {
        "Content-Type":     "application/x-www-form-urlencoded",
        Accept:             "application/json, text/javascript, */*",
        "X-Requested-With": "XMLHttpRequest",
        Referer:            KAJABI_FORM_URL,
        Origin:             "https://www.theleadingedge.life",
      },
      body: body.toString(),
    });
    if (!retryRes.ok) {
      const text = await retryRes.text();
      throw new Error(`Kajabi retry failed ${retryRes.status}: ${text.slice(0, 200)}`);
    }
    return;
  }

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kajabi submit failed ${res.status}: ${text.slice(0, 200)}`);
  }
}

/** Upsert contact in GHL + add application note */
async function submitToGHL(
  apiKey: string,
  locationId: string | undefined,
  qualified: boolean,
  fields: {
    firstName: string; lastName: string; email: string; phone: string;
    occupation: string; frustration: string; helpWith: string; incomeRange: string;
  }
): Promise<void> {
  const contactPayload: Record<string, unknown> = {
    firstName: fields.firstName,
    lastName:  fields.lastName,
    email:     fields.email,
    phone:     fields.phone,
    tags:      ["career-crossroads", qualified ? "cc-qualified" : "cc-not-qualified"],
    source:    "Career Crossroads Landing Page",
  };

  // Include locationId if we have it — PIT tokens may infer it automatically
  if (locationId) contactPayload.locationId = locationId;

  const upsertRes = await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
    method: "POST",
    headers: {
      Authorization:  `Bearer ${apiKey}`,
      Version:        "2021-07-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactPayload),
  });

  const responseText = await upsertRes.text();

  if (!upsertRes.ok) {
    throw new Error(`GHL upsert failed ${upsertRes.status}: ${responseText.slice(0, 300)}`);
  }

  let upsertData: Record<string, any>;
  try { upsertData = JSON.parse(responseText); } catch { return; }

  const contactId = upsertData.contact?.id;
  if (!contactId) return;

  // Add a note with the full application answers
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
        `Help needed: ${fields.helpWith}`,
        `Household Income Range: ${fields.incomeRange}`,
        `Qualified: ${qualified ? "Yes (income over $50k)" : "No (income under $50k or not applicable)"}`,
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

  const { firstName, lastName, email, phone, occupation, frustration, helpWith, incomeRange } = body;

  if (!firstName || !lastName || !email || !phone || !occupation || !frustration || !helpWith || !incomeRange) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), { status: 400, headers });
  }

  const apiKey     = import.meta.env.GHL_API_KEY;
  const locationId = import.meta.env.GHL_LOCATION_ID; // optional — helps but PIT may not need it
  const qualified  = incomeRange === "over_50k";
  const fields     = { firstName, lastName, email, phone, occupation, frustration, helpWith, incomeRange };

  const [ghlResult, kajabiResult] = await Promise.allSettled([
    submitToGHL(apiKey, locationId, qualified, fields),
    submitToKajabi(fields),
  ]);

  if (ghlResult.status    === "rejected") console.error("GHL error:",    String(ghlResult.reason));
  if (kajabiResult.status === "rejected") console.error("Kajabi error:", String(kajabiResult.reason));

  return new Response(JSON.stringify({ success: true, qualified }), { status: 200, headers });
};
