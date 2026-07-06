import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-twitter-card`. */
export const seo_twitter_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-twitter-card" }));
