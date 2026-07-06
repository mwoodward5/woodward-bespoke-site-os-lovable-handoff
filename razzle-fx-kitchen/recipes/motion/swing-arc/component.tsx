import "./styles.css";
import type { ReactNode } from "react";
/**
 * Swing Arc — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSwingArc({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-swing-arc">
      <div className="rfx-swing-arc__inner">
        {children ?? <h2>Swing Arc</h2>}
      </div>
    </section>
  );
}
export default RfxSwingArc;
