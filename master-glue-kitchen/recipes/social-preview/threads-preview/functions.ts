import { createServerFn } from "@tanstack/react-start";
/** Server fn for `threads-preview` — social-preview recipe. */
export const threads_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "threads-preview", cat: "social-preview" }));
