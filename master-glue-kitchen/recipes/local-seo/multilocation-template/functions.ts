import { createServerFn } from "@tanstack/react-start";
/** Server fn for `multilocation-template` — local-seo recipe. */
export const multilocation_template_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "multilocation-template", cat: "local-seo" }));
