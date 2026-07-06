import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-blur-face-privacy` — content-rescue recipe. */
export const photo_blur_face_privacy_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-blur-face-privacy", cat: "content-rescue" }));
