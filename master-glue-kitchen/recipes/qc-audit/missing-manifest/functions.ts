import { createServerFn } from "@tanstack/react-start";
/** Server fn for `missing-manifest` — qc-audit recipe. */
export const missing_manifest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "missing-manifest", cat: "qc-audit" }));
