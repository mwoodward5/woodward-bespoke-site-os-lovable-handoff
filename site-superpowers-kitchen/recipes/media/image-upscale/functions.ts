import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-upscale`. */
export const image_upscale_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-upscale" }));
