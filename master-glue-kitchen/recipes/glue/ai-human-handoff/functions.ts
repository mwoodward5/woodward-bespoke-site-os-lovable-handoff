import { createServerFn } from "@tanstack/react-start";
/** Server fn for `ai-human-handoff` — glue recipe. */
export const ai_human_handoff_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "ai-human-handoff", cat: "glue" }));
