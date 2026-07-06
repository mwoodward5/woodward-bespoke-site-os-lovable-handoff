import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-boutique` — typography recipe. */
export const pair_boutique_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-boutique", cat: "typography" }));
