import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cross Hatch — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCrossHatch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cross-hatch">
      <div className="rfx-cross-hatch__inner">
        {children ?? <h2>Cross Hatch</h2>}
      </div>
    </section>
  );
}
export default RfxCrossHatch;
