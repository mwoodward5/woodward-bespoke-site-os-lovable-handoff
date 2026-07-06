import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sale Badge — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxSaleBadge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sale-badge">
      <div className="rfx-sale-badge__inner">
        {children ?? <h2>Sale Badge</h2>}
      </div>
    </section>
  );
}
export default RfxSaleBadge;
