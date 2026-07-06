import { createServerFn } from "@tanstack/react-start";
/** Server fn for `rate-limit-ip`. */
export const rate_limit_ip_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "rate-limit-ip" }));
