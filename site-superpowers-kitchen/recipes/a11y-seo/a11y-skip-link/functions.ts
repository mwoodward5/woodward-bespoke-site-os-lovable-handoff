import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-skip-link`. */
export const a11y_skip_link_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-skip-link" }));
