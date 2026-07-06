import { createServerFn } from "@tanstack/react-start";
/** Server fn for `twitter-card` — social-preview recipe. */
export const twitter_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "twitter-card", cat: "social-preview" }));
