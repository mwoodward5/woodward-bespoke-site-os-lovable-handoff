import { createServerFn } from "@tanstack/react-start";
/** Server fn for `font-loading-audit` — qc-audit recipe. */
export const font_loading_audit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "font-loading-audit", cat: "qc-audit" }));
