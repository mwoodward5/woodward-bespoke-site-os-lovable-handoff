import { createServerFn } from "@tanstack/react-start";
/** Server fn for `print-ticket-css` — glue recipe. */
export const print_ticket_css_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "print-ticket-css", cat: "glue" }));
