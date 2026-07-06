import { createServerFn } from "@tanstack/react-start";
/** Server fn for `eula` — legal recipe. */
export const eula_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "eula", cat: "legal" }));
