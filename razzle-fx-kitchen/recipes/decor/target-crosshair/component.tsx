import "./styles.css";
import type { ReactNode } from "react";
/**
 * Target Crosshair — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTargetCrosshair({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-target-crosshair">
      <div className="rfx-target-crosshair__inner">
        {children ?? <h2>Target Crosshair</h2>}
      </div>
    </section>
  );
}
export default RfxTargetCrosshair;
