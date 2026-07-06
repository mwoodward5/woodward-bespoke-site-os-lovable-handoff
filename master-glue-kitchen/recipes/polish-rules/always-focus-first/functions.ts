import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-focus-first` — polish-rules recipe. */
export const always_focus_first_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-focus-first", cat: "polish-rules" }));
