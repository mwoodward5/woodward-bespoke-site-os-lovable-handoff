import "./styles.css";
import type { ReactNode } from "react";
/**
 * Paint Drip — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPaintDrip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-paint-drip">
      <div className="rfx-paint-drip__inner">
        {children ?? <h2>Paint Drip</h2>}
      </div>
    </section>
  );
}
export default RfxPaintDrip;
