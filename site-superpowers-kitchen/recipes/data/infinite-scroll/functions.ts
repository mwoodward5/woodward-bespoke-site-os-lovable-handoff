import { createServerFn } from "@tanstack/react-start";
/** Server fn for `infinite-scroll`. */
export const infinite_scroll_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "infinite-scroll" }));
