import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-face-swap-guard`. */
export const image_face_swap_guard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-face-swap-guard" }));
