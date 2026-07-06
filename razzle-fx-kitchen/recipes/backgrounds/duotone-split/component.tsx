import "./styles.css";
import type { ReactNode } from "react";
/**
 * Duotone Split — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDuotoneSplit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-duotone-split">
      <div className="rfx-duotone-split__inner">
        {children ?? <h2>Duotone Split</h2>}
      </div>
    </section>
  );
}
export default RfxDuotoneSplit;
