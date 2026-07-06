import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-sr-only`. */
export const a11y_sr_only_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-sr-only" }));
