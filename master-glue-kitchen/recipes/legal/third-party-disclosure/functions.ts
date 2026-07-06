import { createServerFn } from "@tanstack/react-start";
/** Server fn for `third-party-disclosure` — legal recipe. */
export const third_party_disclosure_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "third-party-disclosure", cat: "legal" }));
