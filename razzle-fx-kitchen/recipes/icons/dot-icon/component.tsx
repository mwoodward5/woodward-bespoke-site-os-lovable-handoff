import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dot Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDotIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dot-icon">
      <div className="rfx-dot-icon__inner">
        {children ?? <h2>Dot Icon</h2>}
      </div>
    </section>
  );
}
export default RfxDotIcon;
