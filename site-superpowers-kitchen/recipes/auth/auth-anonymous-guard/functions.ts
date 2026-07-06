import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-anonymous-guard`. */
export const auth_anonymous_guard_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-anonymous-guard" }));
