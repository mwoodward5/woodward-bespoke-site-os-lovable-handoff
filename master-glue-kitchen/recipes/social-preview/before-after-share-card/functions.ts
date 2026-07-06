import { createServerFn } from "@tanstack/react-start";
/** Server fn for `before-after-share-card` — social-preview recipe. */
export const before_after_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "before-after-share-card", cat: "social-preview" }));
