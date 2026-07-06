import { createServerFn } from "@tanstack/react-start";
/** Server fn for `version-endpoint`. */
export const version_endpoint_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "version-endpoint" }));
