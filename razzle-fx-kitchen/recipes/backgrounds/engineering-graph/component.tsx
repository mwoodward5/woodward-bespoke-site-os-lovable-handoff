import "./styles.css";
import type { ReactNode } from "react";
/**
 * Engineering Graph — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxEngineeringGraph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-engineering-graph">
      <div className="rfx-engineering-graph__inner">
        {children ?? <h2>Engineering Graph</h2>}
      </div>
    </section>
  );
}
export default RfxEngineeringGraph;
