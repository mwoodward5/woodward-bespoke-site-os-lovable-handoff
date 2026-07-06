import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stamp Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxStampIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stamp-icon">
      <div className="rfx-stamp-icon__inner">
        {children ?? <h2>Stamp Icon</h2>}
      </div>
    </section>
  );
}
export default RfxStampIcon;
