import "./styles.css";
import type { ReactNode } from "react";
/**
 * Wireframe Terrain — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxWireframeTerrain({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-wireframe-terrain">
      <div className="rfx-wireframe-terrain__inner">
        {children ?? <h2>Wireframe Terrain</h2>}
      </div>
    </section>
  );
}
export default RfxWireframeTerrain;
