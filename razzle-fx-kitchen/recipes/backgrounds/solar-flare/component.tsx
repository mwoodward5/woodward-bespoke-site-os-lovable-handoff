import "./styles.css";
import type { ReactNode } from "react";
/**
 * Solar Flare — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSolarFlare({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-solar-flare">
      <div className="rfx-solar-flare__inner">
        {children ?? <h2>Solar Flare</h2>}
      </div>
    </section>
  );
}
export default RfxSolarFlare;
