import "./styles.css";
import type { ReactNode } from "react";
/**
 * Matte Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMatteIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-matte-icon">
      <div className="rfx-matte-icon__inner">
        {children ?? <h2>Matte Icon</h2>}
      </div>
    </section>
  );
}
export default RfxMatteIcon;
