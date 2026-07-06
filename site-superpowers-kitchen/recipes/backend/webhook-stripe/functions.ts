import { createServerFn } from "@tanstack/react-start";
/** Server fn for `webhook-stripe`. */
export const webhook_stripe_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "webhook-stripe" }));
