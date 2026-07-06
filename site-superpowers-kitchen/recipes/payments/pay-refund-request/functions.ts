import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-refund-request`. */
export const pay_refund_request_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-refund-request" }));
