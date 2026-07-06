import { createServerFn } from "@tanstack/react-start";
/** Server fn for `llms-txt`. */
export const llms_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "llms-txt" }));
