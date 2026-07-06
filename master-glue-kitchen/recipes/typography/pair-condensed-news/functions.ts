import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pair-condensed-news` — typography recipe. */
export const pair_condensed_news_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pair-condensed-news", cat: "typography" }));
