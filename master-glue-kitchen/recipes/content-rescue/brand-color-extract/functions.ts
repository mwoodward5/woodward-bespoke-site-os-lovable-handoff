import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-color-extract` — content-rescue recipe. */
export const brand_color_extract_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-color-extract", cat: "content-rescue" }));
