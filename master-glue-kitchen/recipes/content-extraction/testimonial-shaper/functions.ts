import { createServerFn } from "@tanstack/react-start";
/** Server fn for `testimonial-shaper` — content-extraction recipe. */
export const testimonial_shaper_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "testimonial-shaper", cat: "content-extraction" }));
