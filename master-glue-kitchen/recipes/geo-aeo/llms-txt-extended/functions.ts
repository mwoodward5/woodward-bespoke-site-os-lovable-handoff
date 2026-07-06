import { createServerFn } from "@tanstack/react-start";
/** Server fn for `llms-txt-extended` — geo-aeo recipe. */
export const llms_txt_extended_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "llms-txt-extended", cat: "geo-aeo" }));
