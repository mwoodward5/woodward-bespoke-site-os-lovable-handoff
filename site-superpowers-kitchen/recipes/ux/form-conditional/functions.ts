import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-conditional`. */
export const form_conditional_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-conditional" }));
