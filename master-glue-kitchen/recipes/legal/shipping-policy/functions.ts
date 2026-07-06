import { createServerFn } from "@tanstack/react-start";
/** Server fn for `shipping-policy` — legal recipe. */
export const shipping_policy_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "shipping-policy", cat: "legal" }));
