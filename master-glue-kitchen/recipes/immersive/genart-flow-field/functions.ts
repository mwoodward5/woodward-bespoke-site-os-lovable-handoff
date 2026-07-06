import { createServerFn } from "@tanstack/react-start";
/** Server fn for `genart-flow-field` — immersive recipe. */
export const genart_flow_field_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "genart-flow-field", cat: "immersive" }));
