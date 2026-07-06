import { createServerFn } from "@tanstack/react-start";
/** Server fn for `stats-share-card` — social-preview recipe. */
export const stats_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "stats-share-card", cat: "social-preview" }));
