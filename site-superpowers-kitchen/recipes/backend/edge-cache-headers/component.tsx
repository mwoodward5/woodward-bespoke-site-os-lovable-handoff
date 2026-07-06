"use client";
import type { ReactNode } from "react";
/**
 * Edge Cache Headers — backend recipe
 */
export function SskEdgeCacheHeaders({ children }: { children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-2">backend</div>
      <div className="font-semibold">Edge Cache Headers</div>
      <div className="text-sm opacity-70 mt-1">Drop-in ready. See README.md for wiring + phrase triggers.</div>
      {children}
    </div>
  );
}
export default SskEdgeCacheHeaders;
