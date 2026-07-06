import "./styles.css";
import type { ReactNode } from "react";
/**
 * Holo Icon — icons recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHoloIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-holo-icon">
      <div className="rfx-holo-icon__inner">
        {children ?? <h2>Holo Icon</h2>}
      </div>
    </section>
  );
}
export default RfxHoloIcon;
