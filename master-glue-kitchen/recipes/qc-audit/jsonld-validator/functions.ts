import { createServerFn } from "@tanstack/react-start";
/** Server fn for `jsonld-validator` — qc-audit recipe. */
export const jsonld_validator_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "jsonld-validator", cat: "qc-audit" }));
