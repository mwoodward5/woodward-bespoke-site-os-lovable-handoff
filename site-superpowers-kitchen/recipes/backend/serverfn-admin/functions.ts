import { createServerFn } from "@tanstack/react-start";
/** Server fn for `serverfn-admin`. */
export const serverfn_admin_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "serverfn-admin" }));
