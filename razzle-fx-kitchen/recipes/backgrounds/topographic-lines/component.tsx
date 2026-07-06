import "./styles.css";
import type { ReactNode } from "react";
/**
 * Topographic Lines — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxTopographicLines({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-topographic-lines">
      <div className="rfx-topographic-lines__inner">
        {children ?? <h2>Topographic Lines</h2>}
      </div>
    </section>
  );
}
export default RfxTopographicLines;
