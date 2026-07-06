import { createServerFn } from "@tanstack/react-start";
/** Server fn for `rtl-flip-check` — qc-audit recipe. */
export const rtl_flip_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "rtl-flip-check", cat: "qc-audit" }));
