import { createServerFn } from "@tanstack/react-start";
/** Server fn for `consent-banner-ccpa` — legal recipe. */
export const consent_banner_ccpa_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "consent-banner-ccpa", cat: "legal" }));
