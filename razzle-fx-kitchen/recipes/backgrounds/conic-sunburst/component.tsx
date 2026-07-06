import "./styles.css";
import type { ReactNode } from "react";
/**
 * Conic Sunburst — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxConicSunburst({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-conic-sunburst">
      <div className="rfx-conic-sunburst__inner">
        {children ?? <h2>Conic Sunburst</h2>}
      </div>
    </section>
  );
}
export default RfxConicSunburst;
