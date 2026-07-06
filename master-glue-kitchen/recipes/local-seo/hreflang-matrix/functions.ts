import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hreflang-matrix` — local-seo recipe. */
export const hreflang_matrix_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hreflang-matrix", cat: "local-seo" }));
