import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-print-stylesheet` — polish-rules recipe. */
export const always_print_stylesheet_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-print-stylesheet", cat: "polish-rules" }));
