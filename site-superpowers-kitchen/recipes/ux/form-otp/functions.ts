import { createServerFn } from "@tanstack/react-start";
/** Server fn for `form-otp`. */
export const form_otp_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "form-otp" }));
