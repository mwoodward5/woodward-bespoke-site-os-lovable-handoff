import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chamfer Edge — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChamferEdge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chamfer-edge">
      <div className="rfx-chamfer-edge__inner">
        {children ?? <h2>Chamfer Edge</h2>}
      </div>
    </section>
  );
}
export default RfxChamferEdge;
