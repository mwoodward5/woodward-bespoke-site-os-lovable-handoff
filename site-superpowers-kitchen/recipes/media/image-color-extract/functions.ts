import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-color-extract`. */
export const image_color_extract_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-color-extract" }));
