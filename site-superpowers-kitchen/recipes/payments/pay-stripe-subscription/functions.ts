import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-stripe-subscription`. */
export const pay_stripe_subscription_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-stripe-subscription" }));
