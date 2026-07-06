import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-magazine` — typography recipe. */
export const pair_magazine_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-magazine", cat: "typography" }));
