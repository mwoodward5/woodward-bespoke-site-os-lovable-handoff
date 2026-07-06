import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pin Icon — icons recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPinIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pin-icon">
      <div className="rfx-pin-icon__inner">
        {children ?? <h2>Pin Icon</h2>}
      </div>
    </section>
  );
}
export default RfxPinIcon;
