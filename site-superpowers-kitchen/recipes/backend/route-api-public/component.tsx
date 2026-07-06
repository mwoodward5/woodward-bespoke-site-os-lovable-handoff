"use client";
import type { ReactNode } from "react";
/**
 * Route Api Public — backend recipe
 */
export function SskRouteApiPublic({ children }: { children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-2">backend</div>
      <div className="font-semibold">Route Api Public</div>
      <div className="text-sm opacity-70 mt-1">Drop-in ready. See README.md for wiring + phrase triggers.</div>
      {children}
    </div>
  );
}
export default SskRouteApiPublic;
