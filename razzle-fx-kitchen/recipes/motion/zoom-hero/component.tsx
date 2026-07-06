import "./styles.css";
import type { ReactNode } from "react";
/**
 * Zoom Hero — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxZoomHero({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-zoom-hero">
      <div className="rfx-zoom-hero__inner">
        {children ?? <h2>Zoom Hero</h2>}
      </div>
    </section>
  );
}
export default RfxZoomHero;
