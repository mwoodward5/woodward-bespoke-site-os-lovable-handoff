import { createServerFn } from "@tanstack/react-start";
/** Server fn for `missing-og` — qc-audit recipe. */
export const missing_og_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "missing-og", cat: "qc-audit" }));
