import { createServerFn } from "@tanstack/react-start";
/** Server fn for `mastodon-preview` — social-preview recipe. */
export const mastodon_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "mastodon-preview", cat: "social-preview" }));
