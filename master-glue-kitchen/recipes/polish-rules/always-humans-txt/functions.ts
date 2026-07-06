import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-humans-txt` — polish-rules recipe. */
export const always_humans_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-humans-txt", cat: "polish-rules" }));
