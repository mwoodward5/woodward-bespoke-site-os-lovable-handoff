import "./styles.css";
import type { ReactNode } from "react";
/**
 * Blueprint Grid — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBlueprintGrid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-blueprint-grid">
      <div className="rfx-blueprint-grid__inner">
        {children ?? <h2>Blueprint Grid</h2>}
      </div>
    </section>
  );
}
export default RfxBlueprintGrid;
