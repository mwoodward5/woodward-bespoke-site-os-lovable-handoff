import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-watermark`. */
export const image_watermark_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-watermark" }));
