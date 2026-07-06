import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-appointment-schema` — local-seo recipe. */
export const local_appointment_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-appointment-schema", cat: "local-seo" }));
