import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-breadcrumb-ui`. */
export const seo_breadcrumb_ui_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-breadcrumb-ui" }));
