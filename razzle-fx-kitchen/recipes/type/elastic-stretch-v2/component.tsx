import "./styles.css";
import type { ReactNode } from "react";
/**
 * Elastic Stretch V2 — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxElasticStretchV2({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-elastic-stretch-v2">
      <div className="rfx-elastic-stretch-v2__inner">
        {children ?? <h2>Elastic Stretch V2</h2>}
      </div>
    </section>
  );
}
export default RfxElasticStretchV2;
