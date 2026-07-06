import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-smart-crop-thirds` — content-rescue recipe. */
export const photo_smart_crop_thirds_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-smart-crop-thirds", cat: "content-rescue" }));
