import { createServerFn } from "@tanstack/react-start";
/** Server fn for `consent-banner-dpdp` — legal recipe. */
export const consent_banner_dpdp_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "consent-banner-dpdp", cat: "legal" }));
