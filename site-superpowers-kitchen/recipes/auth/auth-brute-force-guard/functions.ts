import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-brute-force-guard`. */
export const auth_brute_force_guard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-brute-force-guard" }));
