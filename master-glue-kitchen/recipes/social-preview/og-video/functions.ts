import { createServerFn } from "@tanstack/react-start";
/** Server fn for `og-video` — social-preview recipe. */
export const og_video_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "og-video", cat: "social-preview" }));
