import { createServerFn } from "@tanstack/react-start";
/** Server fn for `terms-gen` — legal recipe. */
export const terms_gen_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "terms-gen", cat: "legal" }));
