import { createServerFn } from "@tanstack/react-start";
/** Server fn for `popover-lift`. */
export const popover_lift_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "popover-lift" }));
