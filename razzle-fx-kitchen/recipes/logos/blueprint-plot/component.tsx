import "./styles.css";
import type { ReactNode } from "react";
/**
 * Blueprint Plot — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBlueprintPlot({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-blueprint-plot">
      <div className="rfx-blueprint-plot__inner">
        {children ?? <h2>Blueprint Plot</h2>}
      </div>
    </section>
  );
}
export default RfxBlueprintPlot;
