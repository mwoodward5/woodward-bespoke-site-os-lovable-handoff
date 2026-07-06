import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-edit-outpaint`. */
export const image_edit_outpaint_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-edit-outpaint" }));
