import "./styles.css";
import type { ReactNode } from "react";
/**
 * Circ Swing — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCircSwing({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-circ-swing">
      <div className="rfx-circ-swing__inner">
        {children ?? <h2>Circ Swing</h2>}
      </div>
    </section>
  );
}
export default RfxCircSwing;
