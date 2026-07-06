import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-coupon-ui`. */
export const pay_coupon_ui_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-coupon-ui" }));
