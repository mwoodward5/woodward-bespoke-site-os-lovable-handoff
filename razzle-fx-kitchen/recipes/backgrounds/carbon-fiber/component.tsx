import "./styles.css";
import type { ReactNode } from "react";
/**
 * Carbon Fiber — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCarbonFiber({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-carbon-fiber">
      <div className="rfx-carbon-fiber__inner">
        {children ?? <h2>Carbon Fiber</h2>}
      </div>
    </section>
  );
}
export default RfxCarbonFiber;
