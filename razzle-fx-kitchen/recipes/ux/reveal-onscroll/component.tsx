import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Onscroll — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxRevealOnscroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-onscroll">
      <div className="rfx-reveal-onscroll__inner">
        {children ?? <h2>Reveal Onscroll</h2>}
      </div>
    </section>
  );
}
export default RfxRevealOnscroll;
