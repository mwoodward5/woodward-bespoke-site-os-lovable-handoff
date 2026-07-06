import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scroll Work — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxScrollWork({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scroll-work">
      <div className="rfx-scroll-work__inner">
        {children ?? <h2>Scroll Work</h2>}
      </div>
    </section>
  );
}
export default RfxScrollWork;
