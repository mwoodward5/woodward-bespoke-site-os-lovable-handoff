import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cdn-cache-strategy` — deploy recipe. */
export const cdn_cache_strategy_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cdn-cache-strategy", cat: "deploy" }));
