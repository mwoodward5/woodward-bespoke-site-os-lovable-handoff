import { createServerFn } from "@tanstack/react-start";
/** Server fn for `press-logo-mono` — content-rescue recipe. */
export const press_logo_mono_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "press-logo-mono", cat: "content-rescue" }));
