import type { APIRoute } from "astro";

export const prerender = false;

const GHL_FORM_ID     = "8cvAMkqDCqcxh388yJJI";
const KAJABI_FORM_URL = "https://www.theleadingedge.life/forms/2148718151";

// Cache GHL locationId across warm invocations
let cachedLocationId: string | null = null;

async function getLocationId(apiKey: string): Promise<string> {
  if (cachedLocationId) return cachedLocationId;
  const res = await fetch("https://services.leadconnectorhq.com/oauth/installedLocations", {
    headers: { Authorization: `Bearer ${apiKey}`, Version: "2021-07-28" },
  });
  if (!res.ok) throw new Error(`Location fetch failed: ${res.status}`);
  const data = await res.json();
  const loc  = data.locations?.[0] ?? data.installedLocations?.[0];
  if (!loc) throw new Error("No location found for this token");
  cachedLocationId = loc.id ?? loc.locationId;
  return cachedLocationId as string;
}

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
    authenticity_token:            token,
    "form_submission[custom_10]":  fields.firstName,
    "form_submission[custom_11]":  fields.lastName,
    "form_submission[email]":      fields.email,
    "form_submission[phone_number]": fields.phone,
    "form_submission[custom_22]":  fields.occupation,
    "form_submission[custom_17]":  fields.frustration,
    "form_submission[custom_28]":  fields.helpWith,
  });

  const res = await fetch(`${KAJABI_FORM_URL}/form_submissions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json, text/javascript",
      "X-Requested-With": "XMLHttpRequest",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Kajabi submit failed ${res.status}: ${text.slice(0, 200)}`);
  }
}

/** Submit to GHL "Opt-in Career" form */
async function submitToGHL(
  apiKey: string,
  locationId: string,
  fields: {
    firstName: string; lastName: string; email: string; phone: string;
    occupation: string; frustration: string; helpWith: string;
  }
): Promise<void> {
  const body = new URLSearchParams({
    locationId,
    formId:     GHL_FORM_ID,
    firstName:  fields.firstName,
    lastName:   fields.lastName,
    email:      fields.email,
    phone:      fields.phone,
    "What is your current occupation? For how long?":              fields.occupation,
    "On a scale of 1-10, how frustrated are you? 10= very frustrated": fields.frustration,
    "What do you need help with?":                                 fields.helpWith,
  });

  const res = await fetch("https://services.leadconnectorhq.com/forms/submit", {
    method: "POST",
    headers: {
      Authorization:  `Bearer ${apiKey}`,
      Version:        "2021-07-28",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: body.toString(),
  });

  if (!res.ok) {
    // Fallback: upsert contact directly so the lead is never lost
    const text = await res.text();
    console.error("GHL form submit failed, falling back to contact upsert:", res.status, text.slice(0, 200));

    await fetch("https://services.leadconnectorhq.com/contacts/upsert", {
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
        tags:      ["career-crossroads"],
        source:    "Career Crossroads Landing Page",
      }),
    });
  }
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

  const apiKey   = import.meta.env.GHL_API_KEY;
  const score    = parseInt(frustration, 10);
  const qualified = score >= 7;
  const fields   = { firstName, lastName, email, phone, occupation, frustration, helpWith };

  // Fire both submissions in parallel — neither blocks the user flow
  const [ghlResult, kajabiResult] = await Promise.allSettled([
    getLocationId(apiKey).then((locationId) => submitToGHL(apiKey, locationId, fields)),
    submitToKajabi(fields),
  ]);

  if (ghlResult.status    === "rejected") console.error("GHL error:",    ghlResult.reason);
  if (kajabiResult.status === "rejected") console.error("Kajabi error:", kajabiResult.reason);

  return new Response(JSON.stringify({ success: true, qualified }), { status: 200, headers });
};
