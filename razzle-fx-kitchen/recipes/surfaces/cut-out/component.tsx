import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cut Out — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCutOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cut-out">
      <div className="rfx-cut-out__inner">
        {children ?? <h2>Cut Out</h2>}
      </div>
    </section>
  );
}
export default RfxCutOut;
