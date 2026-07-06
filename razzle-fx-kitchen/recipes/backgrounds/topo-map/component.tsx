import "./styles.css";
import type { ReactNode } from "react";
/**
 * Topo Map — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxTopoMap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-topo-map">
      <div className="rfx-topo-map__inner">
        {children ?? <h2>Topo Map</h2>}
      </div>
    </section>
  );
}
export default RfxTopoMap;
