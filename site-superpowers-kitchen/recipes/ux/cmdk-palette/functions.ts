import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cmdk-palette`. */
export const cmdk_palette_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cmdk-palette" }));
