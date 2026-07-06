import "./styles.css";
import type { ReactNode } from "react";
/**
 * Protractor Arc — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxProtractorArc({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-protractor-arc">
      <div className="rfx-protractor-arc__inner">
        {children ?? <h2>Protractor Arc</h2>}
      </div>
    </section>
  );
}
export default RfxProtractorArc;
