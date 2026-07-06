import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tilt 3d — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxTilt3d({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tilt-3d">
      <div className="rfx-tilt-3d__inner">
        {children ?? <h2>Tilt 3d</h2>}
      </div>
    </section>
  );
}
export default RfxTilt3d;
