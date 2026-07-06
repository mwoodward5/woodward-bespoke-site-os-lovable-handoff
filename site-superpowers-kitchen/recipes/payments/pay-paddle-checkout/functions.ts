import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-paddle-checkout`. */
export const pay_paddle_checkout_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-paddle-checkout" }));
