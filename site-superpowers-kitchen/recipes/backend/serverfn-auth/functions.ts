import { createServerFn } from "@tanstack/react-start";
/** Server fn for `serverfn-auth`. */
export const serverfn_auth_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "serverfn-auth" }));
