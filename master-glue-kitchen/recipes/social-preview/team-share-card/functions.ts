import { createServerFn } from "@tanstack/react-start";
/** Server fn for `team-share-card` — social-preview recipe. */
export const team_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "team-share-card", cat: "social-preview" }));
