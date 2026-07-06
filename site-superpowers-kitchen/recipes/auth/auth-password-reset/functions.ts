import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-password-reset`. */
export const auth_password_reset_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-password-reset" }));
