import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scroll-driven-css` — immersive recipe. */
export const scroll_driven_css_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scroll-driven-css", cat: "immersive" }));
