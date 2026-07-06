import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gridline Map — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGridlineMap({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gridline-map">
      <div className="rfx-gridline-map__inner">
        {children ?? <h2>Gridline Map</h2>}
      </div>
    </section>
  );
}
export default RfxGridlineMap;
