import { createServerFn } from "@tanstack/react-start";
/** Server fn for `press-share-card` — social-preview recipe. */
export const press_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "press-share-card", cat: "social-preview" }));
