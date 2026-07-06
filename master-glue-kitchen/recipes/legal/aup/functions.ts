import { createServerFn } from "@tanstack/react-start";
/** Server fn for `aup` — legal recipe. */
export const aup_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "aup", cat: "legal" }));
