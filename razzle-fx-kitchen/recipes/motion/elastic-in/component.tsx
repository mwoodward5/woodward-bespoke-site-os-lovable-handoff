import "./styles.css";
import type { ReactNode } from "react";
/**
 * Elastic In — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxElasticIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-elastic-in">
      <div className="rfx-elastic-in__inner">
        {children ?? <h2>Elastic In</h2>}
      </div>
    </section>
  );
}
export default RfxElasticIn;
