import "./styles.css";
import type { ReactNode } from "react";
/**
 * Confetti — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxConfetti({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-confetti">
      <div className="rfx-confetti__inner">
        {children ?? <h2>Confetti</h2>}
      </div>
    </section>
  );
}
export default RfxConfetti;
