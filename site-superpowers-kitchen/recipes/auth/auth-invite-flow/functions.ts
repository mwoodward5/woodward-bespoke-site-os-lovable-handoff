import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-invite-flow`. */
export const auth_invite_flow_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-invite-flow" }));
