import { createServerFn } from "@tanstack/react-start";
/** Server fn for `consent-cookie-audit` — qc-audit recipe. */
export const consent_cookie_audit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "consent-cookie-audit", cat: "qc-audit" }));
