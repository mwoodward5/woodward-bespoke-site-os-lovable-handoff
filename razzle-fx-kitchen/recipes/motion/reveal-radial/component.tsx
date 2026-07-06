import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Radial — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRevealRadial({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-radial">
      <div className="rfx-reveal-radial__inner">
        {children ?? <h2>Reveal Radial</h2>}
      </div>
    </section>
  );
}
export default RfxRevealRadial;
