import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-tilt-cover`. */
export const video_tilt_cover_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-tilt-cover" }));
