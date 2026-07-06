import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-gen-hero`. */
export const image_gen_hero_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-gen-hero" }));
