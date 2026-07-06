import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ink Draw In — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxInkDrawIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ink-draw-in">
      <div className="rfx-ink-draw-in__inner">
        {children ?? <h2>Ink Draw In</h2>}
      </div>
    </section>
  );
}
export default RfxInkDrawIn;
