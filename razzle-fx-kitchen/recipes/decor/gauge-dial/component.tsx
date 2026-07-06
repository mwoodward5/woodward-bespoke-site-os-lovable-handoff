import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gauge Dial — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGaugeDial({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gauge-dial">
      <div className="rfx-gauge-dial__inner">
        {children ?? <h2>Gauge Dial</h2>}
      </div>
    </section>
  );
}
export default RfxGaugeDial;
