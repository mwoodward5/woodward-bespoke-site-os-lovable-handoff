import "./styles.css";
import type { ReactNode } from "react";
/**
 * Underline Draw — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxUnderlineDraw({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-underline-draw">
      <div className="rfx-underline-draw__inner">
        {children ?? <h2>Underline Draw</h2>}
      </div>
    </section>
  );
}
export default RfxUnderlineDraw;
