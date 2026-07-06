import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-aria-live`. */
export const a11y_aria_live_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-aria-live" }));
