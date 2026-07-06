import { createServerFn } from "@tanstack/react-start";
/** Server fn for `scroll-pinning` — immersive recipe. */
export const scroll_pinning_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "scroll-pinning", cat: "immersive" }));
