import { createServerFn } from "@tanstack/react-start";
/** Server fn for `launch-share-card` — social-preview recipe. */
export const launch_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "launch-share-card", cat: "social-preview" }));
