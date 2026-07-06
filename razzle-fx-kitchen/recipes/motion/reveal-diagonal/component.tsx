import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Diagonal — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRevealDiagonal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-diagonal">
      <div className="rfx-reveal-diagonal__inner">
        {children ?? <h2>Reveal Diagonal</h2>}
      </div>
    </section>
  );
}
export default RfxRevealDiagonal;
