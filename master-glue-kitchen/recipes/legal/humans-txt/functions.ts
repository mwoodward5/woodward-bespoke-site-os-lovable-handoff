import { createServerFn } from "@tanstack/react-start";
/** Server fn for `humans-txt` — legal recipe. */
export const humans_txt_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "humans-txt", cat: "legal" }));
