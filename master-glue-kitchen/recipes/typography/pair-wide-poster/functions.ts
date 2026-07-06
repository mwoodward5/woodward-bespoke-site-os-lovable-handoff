import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-wide-poster` — typography recipe. */
export const pair_wide_poster_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-wide-poster", cat: "typography" }));
