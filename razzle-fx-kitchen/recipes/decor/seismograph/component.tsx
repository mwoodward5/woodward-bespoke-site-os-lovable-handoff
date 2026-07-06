import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seismograph — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSeismograph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seismograph">
      <div className="rfx-seismograph__inner">
        {children ?? <h2>Seismograph</h2>}
      </div>
    </section>
  );
}
export default RfxSeismograph;
