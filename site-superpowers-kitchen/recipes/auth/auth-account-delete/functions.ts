import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-account-delete`. */
export const auth_account_delete_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-account-delete" }));
