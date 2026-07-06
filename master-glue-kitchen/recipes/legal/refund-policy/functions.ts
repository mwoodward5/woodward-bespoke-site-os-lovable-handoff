import { createServerFn } from "@tanstack/react-start";
/** Server fn for `refund-policy` — legal recipe. */
export const refund_policy_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "refund-policy", cat: "legal" }));
