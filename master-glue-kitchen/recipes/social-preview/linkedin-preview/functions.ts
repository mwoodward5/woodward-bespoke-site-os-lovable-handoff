import { createServerFn } from "@tanstack/react-start";
/** Server fn for `linkedin-preview` — social-preview recipe. */
export const linkedin_preview_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "linkedin-preview", cat: "social-preview" }));
