import { createServerFn } from "@tanstack/react-start";
/** Server fn for `og-per-language` — social-preview recipe. */
export const og_per_language_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "og-per-language", cat: "social-preview" }));
