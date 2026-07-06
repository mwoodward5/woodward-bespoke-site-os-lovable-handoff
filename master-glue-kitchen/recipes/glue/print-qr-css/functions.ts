import { createServerFn } from "@tanstack/react-start";
/** Server fn for `print-qr-css` — glue recipe. */
export const print_qr_css_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "print-qr-css", cat: "glue" }));
