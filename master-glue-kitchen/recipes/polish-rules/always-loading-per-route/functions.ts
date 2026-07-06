import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-loading-per-route` — polish-rules recipe. */
export const always_loading_per_route_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-loading-per-route", cat: "polish-rules" }));
