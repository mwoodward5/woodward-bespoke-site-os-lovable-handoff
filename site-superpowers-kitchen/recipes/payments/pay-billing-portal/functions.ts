import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-billing-portal`. */
export const pay_billing_portal_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-billing-portal" }));
