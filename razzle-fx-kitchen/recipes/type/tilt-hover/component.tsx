import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tilt Hover — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTiltHover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tilt-hover">
      <div className="rfx-tilt-hover__inner">
        {children ?? <h2>Tilt Hover</h2>}
      </div>
    </section>
  );
}
export default RfxTiltHover;
