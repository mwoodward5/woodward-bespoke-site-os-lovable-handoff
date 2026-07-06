import { createServerFn } from "@tanstack/react-start";
/** Server fn for `testimonial-quote-extract` — content-extraction recipe. */
export const testimonial_quote_extract_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "testimonial-quote-extract", cat: "content-extraction" }));
