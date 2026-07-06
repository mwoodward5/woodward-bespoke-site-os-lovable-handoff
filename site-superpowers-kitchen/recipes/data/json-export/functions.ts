import { createServerFn } from "@tanstack/react-start";
/** Server fn for `json-export`. */
export const json_export_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "json-export" }));
