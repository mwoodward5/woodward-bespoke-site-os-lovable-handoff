import "./styles.css";
import type { ReactNode } from "react";
/**
 * Elastic Stretch — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxElasticStretch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-elastic-stretch">
      <div className="rfx-elastic-stretch__inner">
        {children ?? <h2>Elastic Stretch</h2>}
      </div>
    </section>
  );
}
export default RfxElasticStretch;
