import { createServerFn } from "@tanstack/react-start";
/** Server fn for `course-schema` — geo-aeo recipe. */
export const course_schema_fn = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => d as any)
  .handler(async ({ data }) => ({ ok: true, slug: "course-schema", cat: "geo-aeo" }));
