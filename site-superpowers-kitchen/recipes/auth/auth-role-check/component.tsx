"use client";
import type { ReactNode } from "react";
/**
 * Auth Role Check — auth recipe
 */
export function SskAuthRoleCheck({ children }: { children?: ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-2">auth</div>
      <div className="font-semibold">Auth Role Check</div>
      <div className="text-sm opacity-70 mt-1">Drop-in ready. See README.md for wiring + phrase triggers.</div>
      {children}
    </div>
  );
}
export default SskAuthRoleCheck;
