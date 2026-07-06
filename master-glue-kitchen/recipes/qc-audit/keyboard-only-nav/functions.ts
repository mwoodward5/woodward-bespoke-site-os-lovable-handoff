import { createServerFn } from "@tanstack/react-start";
/** Server fn for `keyboard-only-nav` — qc-audit recipe. */
export const keyboard_only_nav_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "keyboard-only-nav", cat: "qc-audit" }));
