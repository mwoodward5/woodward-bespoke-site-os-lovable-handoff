import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ai-plugin-json` — geo-aeo recipe. */
export const ai_plugin_json_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ai-plugin-json", cat: "geo-aeo" }));
