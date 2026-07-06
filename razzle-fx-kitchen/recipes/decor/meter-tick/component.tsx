import "./styles.css";
import type { ReactNode } from "react";
/**
 * Meter Tick — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMeterTick({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-meter-tick">
      <div className="rfx-meter-tick__inner">
        {children ?? <h2>Meter Tick</h2>}
      </div>
    </section>
  );
}
export default RfxMeterTick;
