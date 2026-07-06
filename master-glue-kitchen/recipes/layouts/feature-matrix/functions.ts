import { createServerFn } from "@tanstack/react-start";
/** Server fn for `feature-matrix` — layouts recipe. */
export const feature_matrix_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "feature-matrix", cat: "layouts" }));
