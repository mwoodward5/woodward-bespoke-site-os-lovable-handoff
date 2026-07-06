import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pulse Beat — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPulseBeat({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pulse-beat">
      <div className="rfx-pulse-beat__inner">
        {children ?? <h2>Pulse Beat</h2>}
      </div>
    </section>
  );
}
export default RfxPulseBeat;
