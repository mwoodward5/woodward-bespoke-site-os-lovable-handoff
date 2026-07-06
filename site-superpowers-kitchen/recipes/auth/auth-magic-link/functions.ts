import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-magic-link`. */
export const auth_magic_link_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-magic-link" }));
