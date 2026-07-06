import { createServerFn } from "@tanstack/react-start";
/** Server fn for `route-api-public`. */
export const route_api_public_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "route-api-public" }));
