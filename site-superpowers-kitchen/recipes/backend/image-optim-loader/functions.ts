import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-optim-loader`. */
export const image_optim_loader_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-optim-loader" }));
