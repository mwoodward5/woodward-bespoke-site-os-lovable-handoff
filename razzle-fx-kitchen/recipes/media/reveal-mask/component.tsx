import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Mask — media recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRevealMask({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-mask">
      <div className="rfx-reveal-mask__inner">
        {children ?? <h2>Reveal Mask</h2>}
      </div>
    </section>
  );
}
export default RfxRevealMask;
