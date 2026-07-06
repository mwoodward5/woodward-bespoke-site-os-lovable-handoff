import { createServerFn } from "@tanstack/react-start";
/** Server fn for `changelog-generator` — deploy recipe. */
export const changelog_generator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "changelog-generator", cat: "deploy" }));
