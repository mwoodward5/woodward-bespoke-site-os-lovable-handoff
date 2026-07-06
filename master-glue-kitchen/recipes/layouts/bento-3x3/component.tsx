"use client";
import type { ReactNode } from "react";
/**
 * Bento 3x3 — layouts recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkBento3x3({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">layouts</div>
      <h3 className="text-2xl font-bold">Bento 3x3</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkBento3x3;
