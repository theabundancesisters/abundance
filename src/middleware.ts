import { defineMiddleware } from "astro:middleware";

const ALLOWED = [
  "/career-crossroads",
  "/career-crossroads925",
  "/booking-qualified",
  "/booking-nq",
  "/fast-track-career",
  "/api/submit-application",
];

export const onRequest = defineMiddleware(({ url, redirect }, next) => {
  const { pathname } = url;

  // Always allow static assets and Astro internals
  if (
    pathname.startsWith("/_astro") ||
    pathname.startsWith("/images") ||
    pathname.match(/\.\w+$/)        // any file extension (js, css, png, etc.)
  ) {
    return next();
  }

  const allowed = ALLOWED.some((p) => pathname === p || pathname.startsWith(p + "/"));
  if (!allowed) {
    return redirect("/career-crossroads", 302);
  }

  return next();
});
