import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-expressive-display` — typography recipe. */
export const pair_expressive_display_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-expressive-display", cat: "typography" }));
