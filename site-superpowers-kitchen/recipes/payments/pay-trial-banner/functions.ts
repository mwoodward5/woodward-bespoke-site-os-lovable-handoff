import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-trial-banner`. */
export const pay_trial_banner_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-trial-banner" }));
