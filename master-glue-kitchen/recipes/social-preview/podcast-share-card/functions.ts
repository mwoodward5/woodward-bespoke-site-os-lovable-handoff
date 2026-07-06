import { createServerFn } from "@tanstack/react-start";
/** Server fn for `podcast-share-card` — social-preview recipe. */
export const podcast_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "podcast-share-card", cat: "social-preview" }));
