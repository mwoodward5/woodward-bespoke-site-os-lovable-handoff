"use client";
import type { ReactNode } from "react";
/**
 * Csv To Services Table — content-extraction recipe
 * See README.md for pipeline + phrase triggers.
 */
export function MgkCsvToServicesTable({ children }: { children?: ReactNode }) {
  return (
    <section className="rounded-2xl border border-black/10 p-6">
      <div className="text-xs uppercase tracking-wider opacity-60 mb-1">content-extraction</div>
      <h3 className="text-2xl font-bold">Csv To Services Table</h3>
      <p className="text-sm opacity-70 mt-2">Drop-in ready. See pipeline.md for AI steps.</p>
      {children}
    </section>
  );
}
export default MgkCsvToServicesTable;
