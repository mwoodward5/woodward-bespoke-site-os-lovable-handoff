import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-discount-code`. */
export const pay_discount_code_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-discount-code" }));
