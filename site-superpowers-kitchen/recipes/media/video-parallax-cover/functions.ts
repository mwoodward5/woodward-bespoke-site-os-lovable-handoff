import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-parallax-cover`. */
export const video_parallax_cover_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-parallax-cover" }));
