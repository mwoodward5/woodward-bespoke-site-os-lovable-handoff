import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-mono-serif-hybrid` — typography recipe. */
export const pair_mono_serif_hybrid_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-mono-serif-hybrid", cat: "typography" }));
