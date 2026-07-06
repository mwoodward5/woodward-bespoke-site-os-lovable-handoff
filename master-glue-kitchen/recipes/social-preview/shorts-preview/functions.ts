import { createServerFn } from "@tanstack/react-start";
/** Server fn for `shorts-preview` — social-preview recipe. */
export const shorts_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "shorts-preview", cat: "social-preview" }));
