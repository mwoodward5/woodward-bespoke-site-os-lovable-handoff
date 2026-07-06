import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-smart-validate`. */
export const form_smart_validate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-smart-validate" }));
