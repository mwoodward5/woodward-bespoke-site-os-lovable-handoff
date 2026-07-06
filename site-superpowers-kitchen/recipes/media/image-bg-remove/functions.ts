import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-bg-remove`. */
export const image_bg_remove_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-bg-remove" }));
