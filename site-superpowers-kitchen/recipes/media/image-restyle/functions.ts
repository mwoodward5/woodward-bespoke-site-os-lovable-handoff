import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-restyle`. */
export const image_restyle_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-restyle" }));
