import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-avatar-gen`. */
export const image_avatar_gen_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-avatar-gen" }));
