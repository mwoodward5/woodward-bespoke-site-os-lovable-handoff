import "./styles.css";
import type { ReactNode } from "react";
/**
 * Limited Badge — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLimitedBadge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-limited-badge">
      <div className="rfx-limited-badge__inner">
        {children ?? <h2>Limited Badge</h2>}
      </div>
    </section>
  );
}
export default RfxLimitedBadge;
