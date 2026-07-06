import { createServerFn } from "@tanstack/react-start";
/** Server fn for `blog-share-card` — social-preview recipe. */
export const blog_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "blog-share-card", cat: "social-preview" }));
