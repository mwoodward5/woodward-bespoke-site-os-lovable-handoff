import { createServerFn } from "@tanstack/react-start";
/** Server fn for `dataset-schema` — geo-aeo recipe. */
export const dataset_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "dataset-schema", cat: "geo-aeo" }));
