import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-object-detect`. */
export const image_object_detect_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-object-detect" }));
