import { createServerFn } from "@tanstack/react-start";
/** Server fn for `camera-photobooth`. */
export const camera_photobooth_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "camera-photobooth" }));
