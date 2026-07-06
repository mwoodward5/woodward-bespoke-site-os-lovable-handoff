import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-reservation-schema` — local-seo recipe. */
export const local_reservation_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-reservation-schema", cat: "local-seo" }));
