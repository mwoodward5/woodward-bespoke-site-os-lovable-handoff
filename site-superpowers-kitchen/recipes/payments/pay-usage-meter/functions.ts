import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-usage-meter`. */
export const pay_usage_meter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-usage-meter" }));
