import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-oauth-discord`. */
export const auth_oauth_discord_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-oauth-discord" }));
