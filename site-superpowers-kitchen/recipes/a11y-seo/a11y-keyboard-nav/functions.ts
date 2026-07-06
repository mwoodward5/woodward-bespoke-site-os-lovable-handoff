import { createServerFn } from "@tanstack/react-start";
/** Server fn for `a11y-keyboard-nav`. */
export const a11y_keyboard_nav_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "a11y-keyboard-nav" }));
