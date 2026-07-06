import { createServerFn } from "@tanstack/react-start";
/** Server fn for `json-ld-suggest` — content-extraction recipe. */
export const json_ld_suggest_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "json-ld-suggest", cat: "content-extraction" }));
