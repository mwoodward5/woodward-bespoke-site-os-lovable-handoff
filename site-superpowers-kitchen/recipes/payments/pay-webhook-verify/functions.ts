import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-webhook-verify`. */
export const pay_webhook_verify_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-webhook-verify" }));
