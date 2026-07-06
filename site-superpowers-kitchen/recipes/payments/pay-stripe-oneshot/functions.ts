import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-stripe-oneshot`. */
export const pay_stripe_oneshot_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-stripe-oneshot" }));
