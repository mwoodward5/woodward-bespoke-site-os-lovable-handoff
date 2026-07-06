import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-jsonld-video`. */
export const seo_jsonld_video_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-jsonld-video" }));
