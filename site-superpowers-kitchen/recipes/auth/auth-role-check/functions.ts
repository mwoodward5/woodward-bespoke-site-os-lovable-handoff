import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-role-check`. */
export const auth_role_check_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-role-check" }));
