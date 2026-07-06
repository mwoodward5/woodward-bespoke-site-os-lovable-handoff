import { createServerFn } from "@tanstack/react-start";
/** Server fn for `print-menu-css` — glue recipe. */
export const print_menu_css_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "print-menu-css", cat: "glue" }));
