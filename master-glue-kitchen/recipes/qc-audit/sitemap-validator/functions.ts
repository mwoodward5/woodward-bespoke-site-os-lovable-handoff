import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sitemap-validator` — qc-audit recipe. */
export const sitemap_validator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sitemap-validator", cat: "qc-audit" }));
