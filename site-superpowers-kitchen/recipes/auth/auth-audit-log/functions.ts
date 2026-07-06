import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-audit-log`. */
export const auth_audit_log_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-audit-log" }));
