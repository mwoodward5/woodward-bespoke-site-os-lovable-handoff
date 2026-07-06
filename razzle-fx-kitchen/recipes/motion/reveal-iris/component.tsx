import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Iris — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRevealIris({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-iris">
      <div className="rfx-reveal-iris__inner">
        {children ?? <h2>Reveal Iris</h2>}
      </div>
    </section>
  );
}
export default RfxRevealIris;
