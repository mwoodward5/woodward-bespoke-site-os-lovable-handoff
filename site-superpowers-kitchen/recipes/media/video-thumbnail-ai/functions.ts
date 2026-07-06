import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-thumbnail-ai`. */
export const video_thumbnail_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-thumbnail-ai" }));
