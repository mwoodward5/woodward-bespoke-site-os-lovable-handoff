import { createServerFn } from "@tanstack/react-start";
/** Server fn for `tiktok-thumbnail` — social-preview recipe. */
export const tiktok_thumbnail_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "tiktok-thumbnail", cat: "social-preview" }));
