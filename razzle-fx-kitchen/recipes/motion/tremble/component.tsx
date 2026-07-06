import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tremble — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTremble({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tremble">
      <div className="rfx-tremble__inner">
        {children ?? <h2>Tremble</h2>}
      </div>
    </section>
  );
}
export default RfxTremble;
