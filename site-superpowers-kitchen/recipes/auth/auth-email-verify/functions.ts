import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-email-verify`. */
export const auth_email_verify_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-email-verify" }));
