import "./styles.css";
import type { ReactNode } from "react";
/**
 * Outline Morph — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxOutlineMorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-outline-morph">
      <div className="rfx-outline-morph__inner">
        {children ?? <h2>Outline Morph</h2>}
      </div>
    </section>
  );
}
export default RfxOutlineMorph;
