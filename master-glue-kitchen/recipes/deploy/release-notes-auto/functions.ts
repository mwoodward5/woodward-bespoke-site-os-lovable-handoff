import { createServerFn } from "@tanstack/react-start";
/** Server fn for `release-notes-auto` — deploy recipe. */
export const release_notes_auto_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "release-notes-auto", cat: "deploy" }));
