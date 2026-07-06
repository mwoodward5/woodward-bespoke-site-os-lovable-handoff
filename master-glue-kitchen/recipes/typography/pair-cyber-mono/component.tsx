"use client";
import type { ReactNode } from "react";
/**
 * Pair Cyber Mono — typography recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkPairCyberMono({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">typography</div>
      <h3 className="text-2xl font-bold">Pair Cyber Mono</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkPairCyberMono;
