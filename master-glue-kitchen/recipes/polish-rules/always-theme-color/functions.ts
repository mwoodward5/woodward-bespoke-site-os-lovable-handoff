import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-theme-color` — polish-rules recipe. */
export const always_theme_color_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-theme-color", cat: "polish-rules" }));
