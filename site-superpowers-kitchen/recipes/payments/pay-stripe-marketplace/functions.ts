import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-stripe-marketplace`. */
export const pay_stripe_marketplace_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-stripe-marketplace" }));
