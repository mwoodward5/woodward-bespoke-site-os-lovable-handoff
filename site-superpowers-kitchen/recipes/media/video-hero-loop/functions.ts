import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-hero-loop`. */
export const video_hero_loop_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-hero-loop" }));
