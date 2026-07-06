import { createServerFn } from "@tanstack/react-start";
/** Server fn for `never-placeholder-title` — polish-rules recipe. */
export const never_placeholder_title_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "never-placeholder-title", cat: "polish-rules" }));
