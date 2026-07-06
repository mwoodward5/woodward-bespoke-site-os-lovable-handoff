import { createServerFn } from "@tanstack/react-start";
/** Server fn for `language-auto-detect` — local-seo recipe. */
export const language_auto_detect_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "language-auto-detect", cat: "local-seo" }));
