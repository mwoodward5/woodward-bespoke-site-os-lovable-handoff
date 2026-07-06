import "./styles.css";
import type { ReactNode } from "react";
/**
 * Voronoi Cells — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVoronoiCells({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-voronoi-cells">
      <div className="rfx-voronoi-cells__inner">
        {children ?? <h2>Voronoi Cells</h2>}
      </div>
    </section>
  );
}
export default RfxVoronoiCells;
