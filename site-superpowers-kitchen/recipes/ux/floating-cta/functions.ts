import { createServerFn } from "@tanstack/react-start";
/** Server fn for `floating-cta`. */
export const floating_cta_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "floating-cta" }));
