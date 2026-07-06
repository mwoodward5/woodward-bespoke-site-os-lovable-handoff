"use client";
import type { ReactNode } from "react";
/**
 * App Links Universal — glue recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkAppLinksUniversal({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">glue</div>
      <h3 className="text-2xl font-bold">App Links Universal</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkAppLinksUniversal;
