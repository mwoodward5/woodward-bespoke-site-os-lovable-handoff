import { createServerFn } from "@tanstack/react-start";
/** Server fn for `product-share-card` — social-preview recipe. */
export const product_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "product-share-card", cat: "social-preview" }));
