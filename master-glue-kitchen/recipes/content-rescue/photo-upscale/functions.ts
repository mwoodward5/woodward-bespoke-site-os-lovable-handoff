import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-upscale` — content-rescue recipe. */
export const photo_upscale_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-upscale", cat: "content-rescue" }));
