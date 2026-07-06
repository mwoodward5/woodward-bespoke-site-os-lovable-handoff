import { createServerFn } from "@tanstack/react-start";
/** Server fn for `quote-to-image` — social-preview recipe. */
export const quote_to_image_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "quote-to-image", cat: "social-preview" }));
