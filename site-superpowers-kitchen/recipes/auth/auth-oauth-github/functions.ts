import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-oauth-github`. */
export const auth_oauth_github_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-oauth-github" }));
