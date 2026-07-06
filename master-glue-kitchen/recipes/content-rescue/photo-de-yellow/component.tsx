"use client";
import type { ReactNode } from "react";
/**
 * Photo De Yellow — content-rescue recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkPhotoDeYellow({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">content-rescue</div>
      <h3 className="text-2xl font-bold">Photo De Yellow</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkPhotoDeYellow;
