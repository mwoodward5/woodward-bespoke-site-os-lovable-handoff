import "./styles.css";
import type { ReactNode } from "react";
/**
 * Reveal Clip — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRevealClip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-reveal-clip">
      <div className="rfx-reveal-clip__inner">
        {children ?? <h2>Reveal Clip</h2>}
      </div>
    </section>
  );
}
export default RfxRevealClip;
