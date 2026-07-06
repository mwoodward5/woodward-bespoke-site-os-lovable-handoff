import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-signout-all`. */
export const auth_signout_all_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-signout-all" }));
