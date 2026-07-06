import { createServerFn } from "@tanstack/react-start";
/** Server fn for `event-share-card` — social-preview recipe. */
export const event_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "event-share-card", cat: "social-preview" }));
