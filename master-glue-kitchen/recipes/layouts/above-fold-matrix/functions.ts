import { createServerFn } from "@tanstack/react-start";
/** Server fn for `above-fold-matrix` — layouts recipe. */
export const above_fold_matrix_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "above-fold-matrix", cat: "layouts" }));
