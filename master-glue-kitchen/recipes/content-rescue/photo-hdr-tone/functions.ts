import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-hdr-tone` — content-rescue recipe. */
export const photo_hdr_tone_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-hdr-tone", cat: "content-rescue" }));
