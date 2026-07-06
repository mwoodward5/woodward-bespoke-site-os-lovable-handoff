import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-all-caps-display` — typography recipe. */
export const pair_all_caps_display_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-all-caps-display", cat: "typography" }));
