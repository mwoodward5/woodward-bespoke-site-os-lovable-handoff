import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-metadata-strip` — content-rescue recipe. */
export const photo_metadata_strip_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-metadata-strip", cat: "content-rescue" }));
