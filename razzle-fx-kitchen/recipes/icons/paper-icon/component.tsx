import "./styles.css";
import type { ReactNode } from "react";
/**
 * Paper Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPaperIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-paper-icon">
      <div className="rfx-paper-icon__inner">
        {children ?? <h2>Paper Icon</h2>}
      </div>
    </section>
  );
}
export default RfxPaperIcon;
