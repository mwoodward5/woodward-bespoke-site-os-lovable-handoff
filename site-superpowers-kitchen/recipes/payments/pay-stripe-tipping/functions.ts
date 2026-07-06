import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-stripe-tipping`. */
export const pay_stripe_tipping_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-stripe-tipping" }));
