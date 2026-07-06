import { createServerFn } from "@tanstack/react-start";
/** Server fn for `https-canonical-redirect` — qc-audit recipe. */
export const https_canonical_redirect_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "https-canonical-redirect", cat: "qc-audit" }));
