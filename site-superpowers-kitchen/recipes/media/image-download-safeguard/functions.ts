import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-download-safeguard`. */
export const image_download_safeguard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-download-safeguard" }));
