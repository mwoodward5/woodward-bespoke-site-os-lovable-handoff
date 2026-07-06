import { createServerFn } from "@tanstack/react-start";
/** Server fn for `photo-dedupe-perceptual` — content-rescue recipe. */
export const photo_dedupe_perceptual_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "photo-dedupe-perceptual", cat: "content-rescue" }));
