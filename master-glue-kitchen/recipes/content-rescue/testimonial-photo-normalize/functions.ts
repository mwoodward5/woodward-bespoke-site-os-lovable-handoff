import { createServerFn } from "@tanstack/react-start";
/** Server fn for `testimonial-photo-normalize` — content-rescue recipe. */
export const testimonial_photo_normalize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "testimonial-photo-normalize", cat: "content-rescue" }));
