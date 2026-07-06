import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hover Zoom — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHoverZoom({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hover-zoom">
      <div className="rfx-hover-zoom__inner">
        {children ?? <h2>Hover Zoom</h2>}
      </div>
    </section>
  );
}
export default RfxHoverZoom;
