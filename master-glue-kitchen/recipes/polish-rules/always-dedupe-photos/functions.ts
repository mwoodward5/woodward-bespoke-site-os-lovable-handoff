import { createServerFn } from "@tanstack/react-start";
/** Server fn for `always-dedupe-photos` — polish-rules recipe. */
export const always_dedupe_photos_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "always-dedupe-photos", cat: "polish-rules" }));
