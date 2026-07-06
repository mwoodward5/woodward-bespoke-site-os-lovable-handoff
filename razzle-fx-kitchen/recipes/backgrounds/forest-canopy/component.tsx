import "./styles.css";
import type { ReactNode } from "react";
/**
 * Forest Canopy — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxForestCanopy({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-forest-canopy">
      <div className="rfx-forest-canopy__inner">
        {children ?? <h2>Forest Canopy</h2>}
      </div>
    </section>
  );
}
export default RfxForestCanopy;
