import { createServerFn } from "@tanstack/react-start";
/** Server fn for `podcast-schema` — geo-aeo recipe. */
export const podcast_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "podcast-schema", cat: "geo-aeo" }));
