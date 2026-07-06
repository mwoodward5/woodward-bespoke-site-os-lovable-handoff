import "./styles.css";
import type { ReactNode } from "react";
/**
 * Grid Hatch — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGridHatch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-grid-hatch">
      <div className="rfx-grid-hatch__inner">
        {children ?? <h2>Grid Hatch</h2>}
      </div>
    </section>
  );
}
export default RfxGridHatch;
