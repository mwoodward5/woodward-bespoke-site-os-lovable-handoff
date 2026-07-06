"use client";
import type { ReactNode } from "react";
/**
 * Map Embed Custom — local-seo recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkMapEmbedCustom({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">local-seo</div>
      <h3 className="text-2xl font-bold">Map Embed Custom</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkMapEmbedCustom;
