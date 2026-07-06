import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ribbon Icon — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxRibbonIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ribbon-icon">
      <div className="rfx-ribbon-icon__inner">
        {children ?? <h2>Ribbon Icon</h2>}
      </div>
    </section>
  );
}
export default RfxRibbonIcon;
