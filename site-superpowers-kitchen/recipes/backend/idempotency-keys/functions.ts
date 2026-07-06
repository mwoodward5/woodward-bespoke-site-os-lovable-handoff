import { createServerFn } from "@tanstack/react-start";
/** Server fn for `idempotency-keys`. */
export const idempotency_keys_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "idempotency-keys" }));
