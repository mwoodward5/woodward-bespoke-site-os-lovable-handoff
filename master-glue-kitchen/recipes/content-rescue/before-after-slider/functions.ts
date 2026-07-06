import { createServerFn } from "@tanstack/react-start";
/** Server fn for `before-after-slider` — content-rescue recipe. */
export const before_after_slider_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "before-after-slider", cat: "content-rescue" }));
