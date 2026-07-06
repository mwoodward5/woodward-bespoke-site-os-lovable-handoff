import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-translation`. */
export const video_translation_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-translation" }));
