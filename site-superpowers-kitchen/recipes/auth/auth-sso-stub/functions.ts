import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-sso-stub`. */
export const auth_sso_stub_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-sso-stub" }));
