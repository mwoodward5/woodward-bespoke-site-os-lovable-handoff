import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-editorial-serif-v2` — typography recipe. */
export const pair_editorial_serif_v2_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-editorial-serif-v2", cat: "typography" }));
