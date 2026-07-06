import { createServerFn } from "@tanstack/react-start";
/** Server fn for `video-schema` — geo-aeo recipe. */
export const video_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "video-schema", cat: "geo-aeo" }));
