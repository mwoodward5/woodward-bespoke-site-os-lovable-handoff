import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-hairline-plus-slab` — typography recipe. */
export const pair_hairline_plus_slab_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-hairline-plus-slab", cat: "typography" }));
