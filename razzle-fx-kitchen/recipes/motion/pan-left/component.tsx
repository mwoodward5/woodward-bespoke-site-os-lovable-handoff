import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pan Left — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPanLeft({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pan-left">
      <div className="rfx-pan-left__inner">
        {children ?? <h2>Pan Left</h2>}
      </div>
    </section>
  );
}
export default RfxPanLeft;
