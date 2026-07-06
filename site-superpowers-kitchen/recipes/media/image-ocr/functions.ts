import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-ocr`. */
export const image_ocr_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-ocr" }));
