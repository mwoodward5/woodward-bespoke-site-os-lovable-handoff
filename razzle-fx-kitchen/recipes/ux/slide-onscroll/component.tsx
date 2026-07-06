import "./styles.css";
import type { ReactNode } from "react";
/**
 * Slide Onscroll — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSlideOnscroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-slide-onscroll">
      <div className="rfx-slide-onscroll__inner">
        {children ?? <h2>Slide Onscroll</h2>}
      </div>
    </section>
  );
}
export default RfxSlideOnscroll;
