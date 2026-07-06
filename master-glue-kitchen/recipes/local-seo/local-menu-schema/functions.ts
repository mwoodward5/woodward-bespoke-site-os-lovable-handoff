import { createServerFn } from "@tanstack/react-start";
/** Server fn for `local-menu-schema` — local-seo recipe. */
export const local_menu_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "local-menu-schema", cat: "local-seo" }));
