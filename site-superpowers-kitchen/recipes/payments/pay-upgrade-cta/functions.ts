import { createServerFn } from "@tanstack/react-start";
/** Server fn for `pay-upgrade-cta`. */
export const pay_upgrade_cta_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "pay-upgrade-cta" }));
