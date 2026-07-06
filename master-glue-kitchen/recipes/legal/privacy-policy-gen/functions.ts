import { createServerFn } from "@tanstack/react-start";
/** Server fn for `privacy-policy-gen` — legal recipe. */
export const privacy_policy_gen_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "privacy-policy-gen", cat: "legal" }));
