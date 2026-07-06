import { createServerFn } from "@tanstack/react-start";
/** Server fn for `testimonial-wall` — layouts recipe. */
export const testimonial_wall_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "testimonial-wall", cat: "layouts" }));
