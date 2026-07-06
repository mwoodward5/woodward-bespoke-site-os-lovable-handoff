import { createServerFn } from "@tanstack/react-start";
/** Server fn for `press-release` — content-extraction recipe. */
export const press_release_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "press-release", cat: "content-extraction" }));
