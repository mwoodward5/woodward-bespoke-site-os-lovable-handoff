import { createServerFn } from "@tanstack/react-start";
/** Server fn for `lenis-smooth-scroll` — immersive recipe. */
export const lenis_smooth_scroll_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "lenis-smooth-scroll", cat: "immersive" }));
