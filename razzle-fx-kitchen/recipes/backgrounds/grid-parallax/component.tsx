import "./styles.css";
import type { ReactNode } from "react";
/**
 * Grid Parallax — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGridParallax({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-grid-parallax">
      <div className="rfx-grid-parallax__inner">
        {children ?? <h2>Grid Parallax</h2>}
      </div>
    </section>
  );
}
export default RfxGridParallax;
