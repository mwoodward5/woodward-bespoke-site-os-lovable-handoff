import { createServerFn } from "@tanstack/react-start";
/** Server fn for `auth-privacy-export`. */
export const auth_privacy_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "auth-privacy-export" }));
