import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-address-autocomplete`. */
export const form_address_autocomplete_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-address-autocomplete" }));
