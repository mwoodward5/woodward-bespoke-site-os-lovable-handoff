import { createServerFn } from "@tanstack/react-start";
/** Server fn for `cwv-runner` — qc-audit recipe. */
export const cwv_runner_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "cwv-runner", cat: "qc-audit" }));
