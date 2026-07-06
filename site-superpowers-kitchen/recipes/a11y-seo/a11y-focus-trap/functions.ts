import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-focus-trap`. */
export const a11y_focus_trap_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-focus-trap" }));
