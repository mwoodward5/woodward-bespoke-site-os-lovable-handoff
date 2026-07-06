import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-image-crop`. */
export const form_image_crop_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-image-crop" }));
