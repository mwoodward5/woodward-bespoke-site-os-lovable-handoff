import { createServerFn } from "@tanstack/react-start";
/** Server fn for `well-known-ai-txt` — geo-aeo recipe. */
export const well_known_ai_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "well-known-ai-txt", cat: "geo-aeo" }));
