import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-reduced-motion`. */
export const a11y_reduced_motion_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-reduced-motion" }));
