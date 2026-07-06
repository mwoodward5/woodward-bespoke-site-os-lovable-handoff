import { createServerFn } from "@tanstack/react-start";
/** Server fn for `recipe-schema` — geo-aeo recipe. */
export const recipe_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "recipe-schema", cat: "geo-aeo" }));
