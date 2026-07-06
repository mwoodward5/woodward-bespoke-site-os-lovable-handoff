import { createServerFn } from "@tanstack/react-start";
/** Server fn for `speakable-schema` — geo-aeo recipe. */
export const speakable_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "speakable-schema", cat: "geo-aeo" }));
