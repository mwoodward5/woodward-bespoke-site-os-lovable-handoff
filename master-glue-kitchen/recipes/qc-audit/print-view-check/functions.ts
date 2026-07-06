import { createServerFn } from "@tanstack/react-start";
/** Server fn for `print-view-check` — qc-audit recipe. */
export const print_view_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "print-view-check", cat: "qc-audit" }));
