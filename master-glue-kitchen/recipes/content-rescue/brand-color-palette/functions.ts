import { createServerFn } from "@tanstack/react-start";
/** Server fn for `brand-color-palette` — content-rescue recipe. */
export const brand_color_palette_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "brand-color-palette", cat: "content-rescue" }));
