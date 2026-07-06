import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-cjk-safe` — typography recipe. */
export const pair_cjk_safe_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-cjk-safe", cat: "typography" }));
