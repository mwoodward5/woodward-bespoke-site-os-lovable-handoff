import "./styles.css";
import type { ReactNode } from "react";
/**
 * Line Hatch — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLineHatch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-line-hatch">
      <div className="rfx-line-hatch__inner">
        {children ?? <h2>Line Hatch</h2>}
      </div>
    </section>
  );
}
export default RfxLineHatch;
