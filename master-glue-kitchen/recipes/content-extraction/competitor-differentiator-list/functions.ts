import { createServerFn } from "@tanstack/react-start";
/** Server fn for `competitor-differentiator-list` — content-extraction recipe. */
export const competitor_differentiator_list_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "competitor-differentiator-list", cat: "content-extraction" }));
