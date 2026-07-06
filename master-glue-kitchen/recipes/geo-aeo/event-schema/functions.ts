import { createServerFn } from "@tanstack/react-start";
/** Server fn for `event-schema` — geo-aeo recipe. */
export const event_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "event-schema", cat: "geo-aeo" }));
