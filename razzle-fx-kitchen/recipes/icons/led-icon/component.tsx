import "./styles.css";
import type { ReactNode } from "react";
/**
 * Led Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLedIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-led-icon">
      <div className="rfx-led-icon__inner">
        {children ?? <h2>Led Icon</h2>}
      </div>
    </section>
  );
}
export default RfxLedIcon;
