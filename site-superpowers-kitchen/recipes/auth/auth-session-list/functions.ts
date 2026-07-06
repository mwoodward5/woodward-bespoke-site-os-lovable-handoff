import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-session-list`. */
export const auth_session_list_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-session-list" }));
