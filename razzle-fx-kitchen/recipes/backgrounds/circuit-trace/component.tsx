import "./styles.css";
import type { ReactNode } from "react";
/**
 * Circuit Trace — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCircuitTrace({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-circuit-trace">
      <div className="rfx-circuit-trace__inner">
        {children ?? <h2>Circuit Trace</h2>}
      </div>
    </section>
  );
}
export default RfxCircuitTrace;
