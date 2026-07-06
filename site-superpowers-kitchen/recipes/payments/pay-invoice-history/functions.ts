import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-invoice-history`. */
export const pay_invoice_history_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-invoice-history" }));
