import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-signature-pad`. */
export const form_signature_pad_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-signature-pad" }));
