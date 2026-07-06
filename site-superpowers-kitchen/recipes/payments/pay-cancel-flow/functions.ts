import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-cancel-flow`. */
export const pay_cancel_flow_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-cancel-flow" }));
