import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-events-schema` — local-seo recipe. */
export const local_events_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-events-schema", cat: "local-seo" }));
