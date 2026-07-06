import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dead-end-route` — qc-audit recipe. */
export const dead_end_route_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dead-end-route", cat: "qc-audit" }));
