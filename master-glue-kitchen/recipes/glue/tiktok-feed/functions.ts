import { createServerFn } from "@tanstack/react-start";
/** Server fn for `tiktok-feed` — glue recipe. */
export const tiktok_feed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "tiktok-feed", cat: "glue" }));
