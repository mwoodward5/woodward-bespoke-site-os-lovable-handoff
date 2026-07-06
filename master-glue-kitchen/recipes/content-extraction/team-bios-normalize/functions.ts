import { createServerFn } from "@tanstack/react-start";
/** Server fn for `team-bios-normalize` — content-extraction recipe. */
export const team_bios_normalize_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "team-bios-normalize", cat: "content-extraction" }));
