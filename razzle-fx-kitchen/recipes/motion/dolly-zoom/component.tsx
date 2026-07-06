import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dolly Zoom — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxDollyZoom({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dolly-zoom">
      <div className="rfx-dolly-zoom__inner">
        {children ?? <h2>Dolly Zoom</h2>}
      </div>
    </section>
  );
}
export default RfxDollyZoom;
