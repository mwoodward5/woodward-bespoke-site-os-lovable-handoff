import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-jwt-refresh`. */
export const auth_jwt_refresh_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-jwt-refresh" }));
