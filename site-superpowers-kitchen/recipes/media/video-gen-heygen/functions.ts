import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-gen-heygen`. */
export const video_gen_heygen_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-gen-heygen" }));
