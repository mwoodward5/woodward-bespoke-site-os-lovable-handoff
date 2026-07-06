import { createServerFn } from "@tanstack/react-start";
/** Server fn for `testimonial-share-card` — social-preview recipe. */
export const testimonial_share_card_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "testimonial-share-card", cat: "social-preview" }));
