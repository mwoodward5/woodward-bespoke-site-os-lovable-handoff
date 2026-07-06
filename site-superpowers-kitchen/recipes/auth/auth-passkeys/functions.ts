import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-passkeys`. */
export const auth_passkeys_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-passkeys" }));
