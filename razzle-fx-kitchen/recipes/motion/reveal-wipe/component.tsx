import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Wipe — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxRevealWipe({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-wipe">
      <div className="rfx-reveal-wipe__inner">
        {children ?? <h2>Reveal Wipe</h2>}
      </div>
    </section>
  );
}
export default RfxRevealWipe;
