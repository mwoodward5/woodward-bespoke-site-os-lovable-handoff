import { createServerFn } from "@tanstack/react-start";
/** Server fn for `rss-feed`. */
export const rss_feed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "rss-feed" }));
