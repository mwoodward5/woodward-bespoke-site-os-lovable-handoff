import "./styles.css";
import type { ReactNode } from "react";
/**
 * Coordinate Tick — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCoordinateTick({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-coordinate-tick">
      <div className="rfx-coordinate-tick__inner">
        {children ?? <h2>Coordinate Tick</h2>}
      </div>
    </section>
  );
}
export default RfxCoordinateTick;
