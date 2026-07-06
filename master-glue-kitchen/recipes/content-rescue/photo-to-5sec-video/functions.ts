import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-to-5sec-video` — content-rescue recipe. */
export const photo_to_5sec_video_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-to-5sec-video", cat: "content-rescue" }));
