import "./styles.css";
import type { ReactNode } from "react";
/**
 * Elastic Out — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxElasticOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-elastic-out">
      <div className="rfx-elastic-out__inner">
        {children ?? <h2>Elastic Out</h2>}
      </div>
    </section>
  );
}
export default RfxElasticOut;
