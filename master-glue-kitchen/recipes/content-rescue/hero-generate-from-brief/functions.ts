import { createServerFn } from "@tanstack/react-start";
/** Server fn for `hero-generate-from-brief` — content-rescue recipe. */
export const hero_generate_from_brief_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "hero-generate-from-brief", cat: "content-rescue" }));
