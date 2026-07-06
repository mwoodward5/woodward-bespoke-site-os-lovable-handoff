import { createServerFn } from "@tanstack/react-start";
/** Server fn for `youtube-share-card` — social-preview recipe. */
export const youtube_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "youtube-share-card", cat: "social-preview" }));
