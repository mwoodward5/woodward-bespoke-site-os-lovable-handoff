import { createServerFn } from "@tanstack/react-start";
/** Server fn for `consent-banner-gdpr` — legal recipe. */
export const consent_banner_gdpr_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "consent-banner-gdpr", cat: "legal" }));
