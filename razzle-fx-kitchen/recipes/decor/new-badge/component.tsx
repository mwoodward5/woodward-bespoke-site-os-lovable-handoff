import "./styles.css";
import type { ReactNode } from "react";
/**
 * New Badge — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxNewBadge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-new-badge">
      <div className="rfx-new-badge__inner">
        {children ?? <h2>New Badge</h2>}
      </div>
    </section>
  );
}
export default RfxNewBadge;
