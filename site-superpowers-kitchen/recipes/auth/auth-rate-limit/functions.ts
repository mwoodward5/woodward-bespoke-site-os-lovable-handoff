import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-rate-limit`. */
export const auth_rate_limit_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-rate-limit" }));
