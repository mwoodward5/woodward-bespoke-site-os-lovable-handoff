import { createServerFn } from "@tanstack/react-start";
/** Server fn for `age-gate` — legal recipe. */
export const age_gate_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "age-gate", cat: "legal" }));
