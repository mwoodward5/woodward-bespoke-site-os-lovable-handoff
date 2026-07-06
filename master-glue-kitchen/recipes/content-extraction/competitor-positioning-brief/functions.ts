import { createServerFn } from "@tanstack/react-start";
/** Server fn for `competitor-positioning-brief` — content-extraction recipe. */
export const competitor_positioning_brief_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "competitor-positioning-brief", cat: "content-extraction" }));
