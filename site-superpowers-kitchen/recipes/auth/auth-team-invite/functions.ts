import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-team-invite`. */
export const auth_team_invite_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-team-invite" }));
