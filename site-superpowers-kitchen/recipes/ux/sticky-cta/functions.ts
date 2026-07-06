import { createServerFn } from "@tanstack/react-start";
/** Server fn for `sticky-cta`. */
export const sticky_cta_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "sticky-cta" }));
