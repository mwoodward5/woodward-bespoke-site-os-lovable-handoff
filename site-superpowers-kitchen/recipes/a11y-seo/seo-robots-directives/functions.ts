import { createServerFn } from "@tanstack/react-start";
/** Server fn for `seo-robots-directives`. */
export const seo_robots_directives_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "seo-robots-directives" }));
