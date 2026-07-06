import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-to-loop-video` — content-rescue recipe. */
export const photo_to_loop_video_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-to-loop-video", cat: "content-rescue" }));
