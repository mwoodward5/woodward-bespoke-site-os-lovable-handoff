import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-lipsync`. */
export const video_lipsync_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-lipsync" }));
