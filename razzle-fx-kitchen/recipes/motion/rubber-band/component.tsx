import "./styles.css";
import type { ReactNode } from "react";
/**
 * Rubber Band — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRubberBand({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-rubber-band">
      <div className="rfx-rubber-band__inner">
        {children ?? <h2>Rubber Band</h2>}
      </div>
    </section>
  );
}
export default RfxRubberBand;
