import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-clip-summarize`. */
export const video_clip_summarize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-clip-summarize" }));
