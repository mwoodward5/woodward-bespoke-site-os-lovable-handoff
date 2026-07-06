import { createServerFn } from "@tanstack/react-start";
/** Server fn for `milestone-share-card` — social-preview recipe. */
export const milestone_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "milestone-share-card", cat: "social-preview" }));
