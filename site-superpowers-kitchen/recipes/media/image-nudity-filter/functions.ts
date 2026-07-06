import { createServerFn } from "@tanstack/react-start";
/** Server fn for `image-nudity-filter`. */
export const image_nudity_filter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "image-nudity-filter" }));
