import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-phone-intl`. */
export const form_phone_intl_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-phone-intl" }));
