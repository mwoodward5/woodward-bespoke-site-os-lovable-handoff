import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hubspot-adapter` — glue recipe. */
export const hubspot_adapter_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hubspot-adapter", cat: "glue" }));
