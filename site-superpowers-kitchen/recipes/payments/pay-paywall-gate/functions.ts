import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-paywall-gate`. */
export const pay_paywall_gate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-paywall-gate" }));
