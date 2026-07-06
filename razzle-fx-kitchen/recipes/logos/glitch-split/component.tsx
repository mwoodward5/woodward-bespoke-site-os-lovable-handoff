import "./styles.css";
import type { ReactNode } from "react";
/**
 * Glitch Split — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxGlitchSplit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-glitch-split">
      <div className="rfx-glitch-split__inner">
        {children ?? <h2>Glitch Split</h2>}
      </div>
    </section>
  );
}
export default RfxGlitchSplit;
