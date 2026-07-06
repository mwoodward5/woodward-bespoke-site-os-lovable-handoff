import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-editorial-serif` — typography recipe. */
export const pair_editorial_serif_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-editorial-serif", cat: "typography" }));
