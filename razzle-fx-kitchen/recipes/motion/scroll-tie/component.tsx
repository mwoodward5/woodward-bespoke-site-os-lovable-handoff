import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scroll Tie — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxScrollTie({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scroll-tie">
      <div className="rfx-scroll-tie__inner">
        {children ?? <h2>Scroll Tie</h2>}
      </div>
    </section>
  );
}
export default RfxScrollTie;
