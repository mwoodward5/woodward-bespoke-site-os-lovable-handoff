import { createServerFn } from "@tanstack/react-start";
/** Server fn for `entity-graph-jsonld` — geo-aeo recipe. */
export const entity_graph_jsonld_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "entity-graph-jsonld", cat: "geo-aeo" }));
