import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-chapters-ai`. */
export const video_chapters_ai_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-chapters-ai" }));
