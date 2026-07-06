import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-plan-compare`. */
export const pay_plan_compare_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-plan-compare" }));
