import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pulse Beacon — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPulseBeacon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pulse-beacon">
      <div className="rfx-pulse-beacon__inner">
        {children ?? <h2>Pulse Beacon</h2>}
      </div>
    </section>
  );
}
export default RfxPulseBeacon;
