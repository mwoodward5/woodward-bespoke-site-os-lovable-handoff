import "./styles.css";
import type { ReactNode } from "react";
/**
 * Orbit Dots — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxOrbitDots({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-orbit-dots">
      <div className="rfx-orbit-dots__inner">
        {children ?? <h2>Orbit Dots</h2>}
      </div>
    </section>
  );
}
export default RfxOrbitDots;
