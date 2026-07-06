import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-denoise` — content-rescue recipe. */
export const photo_denoise_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-denoise", cat: "content-rescue" }));
