import { createServerFn } from "@tanstack/react-start";
/** Server fn for `roadmap-page` — deploy recipe. */
export const roadmap_page_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "roadmap-page", cat: "deploy" }));
