import { createServerFn } from "@tanstack/react-start";
/** Server fn for `webhook-generic-hmac`. */
export const webhook_generic_hmac_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "webhook-generic-hmac" }));
