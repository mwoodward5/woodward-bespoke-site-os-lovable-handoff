import { createServerFn } from "@tanstack/react-start";
/** Server fn for `well-known-oauth-client`. */
export const well_known_oauth_client_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "well-known-oauth-client" }));
