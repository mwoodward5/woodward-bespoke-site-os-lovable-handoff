import "./styles.css";
import type { ReactNode } from "react";
/**
 * Orbit Loop — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxOrbitLoop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-orbit-loop">
      <div className="rfx-orbit-loop__inner">
        {children ?? <h2>Orbit Loop</h2>}
      </div>
    </section>
  );
}
export default RfxOrbitLoop;
