import { createServerFn } from "@tanstack/react-start";
/** Server fn for `share-quote-card` — social-preview recipe. */
export const share_quote_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "share-quote-card", cat: "social-preview" }));
