import { createServerFn } from "@tanstack/react-start";
/** Server fn for `instagram-feed` — glue recipe. */
export const instagram_feed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "instagram-feed", cat: "glue" }));
