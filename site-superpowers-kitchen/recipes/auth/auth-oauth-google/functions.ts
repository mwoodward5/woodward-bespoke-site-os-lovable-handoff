import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-oauth-google`. */
export const auth_oauth_google_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-oauth-google" }));
