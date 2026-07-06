import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-webp-avif-convert` — content-rescue recipe. */
export const photo_webp_avif_convert_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-webp-avif-convert", cat: "content-rescue" }));
