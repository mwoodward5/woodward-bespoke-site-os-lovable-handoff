import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-devanagari` — typography recipe. */
export const pair_devanagari_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-devanagari", cat: "typography" }));
