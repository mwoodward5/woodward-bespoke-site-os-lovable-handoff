import { createServerFn } from "@tanstack/react-start";
/** Server fn for `coupon-widget` — glue recipe. */
export const coupon_widget_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "coupon-widget", cat: "glue" }));
