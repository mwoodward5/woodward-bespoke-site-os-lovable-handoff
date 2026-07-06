import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-small-caps-editorial` — typography recipe. */
export const pair_small_caps_editorial_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-small-caps-editorial", cat: "typography" }));
