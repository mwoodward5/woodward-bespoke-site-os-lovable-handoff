import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-2fa-totp`. */
export const auth_2fa_totp_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-2fa-totp" }));
