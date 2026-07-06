import { createServerFn } from "@tanstack/react-start";
/** Server fn for `subprocessor-list` — legal recipe. */
export const subprocessor_list_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "subprocessor-list", cat: "legal" }));
