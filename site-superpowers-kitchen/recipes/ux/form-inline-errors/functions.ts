import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-inline-errors`. */
export const form_inline_errors_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-inline-errors" }));
