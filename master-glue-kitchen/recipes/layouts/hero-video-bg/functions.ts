import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hero-video-bg` — layouts recipe. */
export const hero_video_bg_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hero-video-bg", cat: "layouts" }));
