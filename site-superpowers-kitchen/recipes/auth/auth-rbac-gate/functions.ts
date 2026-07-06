import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-rbac-gate`. */
export const auth_rbac_gate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-rbac-gate" }));
