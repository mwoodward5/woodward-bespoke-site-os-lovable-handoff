import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ruler Tick — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRulerTick({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ruler-tick">
      <div className="rfx-ruler-tick__inner">
        {children ?? <h2>Ruler Tick</h2>}
      </div>
    </section>
  );
}
export default RfxRulerTick;
