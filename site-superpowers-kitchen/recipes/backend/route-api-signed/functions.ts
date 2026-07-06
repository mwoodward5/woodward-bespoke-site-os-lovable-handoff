import { createServerFn } from "@tanstack/react-start";
/** Server fn for `route-api-signed`. */
export const route_api_signed_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "route-api-signed" }));
