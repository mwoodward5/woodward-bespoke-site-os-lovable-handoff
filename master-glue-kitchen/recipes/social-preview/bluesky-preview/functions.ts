import { createServerFn } from "@tanstack/react-start";
/** Server fn for `bluesky-preview` — social-preview recipe. */
export const bluesky_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "bluesky-preview", cat: "social-preview" }));
