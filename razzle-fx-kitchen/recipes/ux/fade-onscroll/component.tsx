import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fade Onscroll — ux recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFadeOnscroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fade-onscroll">
      <div className="rfx-fade-onscroll__inner">
        {children ?? <h2>Fade Onscroll</h2>}
      </div>
    </section>
  );
}
export default RfxFadeOnscroll;
