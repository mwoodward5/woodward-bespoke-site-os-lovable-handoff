import "./styles.css";
import type { ReactNode } from "react";
/**
 * Badge Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBadgeIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-badge-icon">
      <div className="rfx-badge-icon__inner">
        {children ?? <h2>Badge Icon</h2>}
      </div>
    </section>
  );
}
export default RfxBadgeIcon;
