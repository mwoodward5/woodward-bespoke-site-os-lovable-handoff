import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-brutal-display` — typography recipe. */
export const pair_brutal_display_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-brutal-display", cat: "typography" }));
