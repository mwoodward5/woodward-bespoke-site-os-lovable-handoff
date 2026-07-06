import "./styles.css";
import type { ReactNode } from "react";
/**
 * Card Tilt 3d — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCardTilt3d({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-card-tilt-3d">
      <div className="rfx-card-tilt-3d__inner">
        {children ?? <h2>Card Tilt 3d</h2>}
      </div>
    </section>
  );
}
export default RfxCardTilt3d;
