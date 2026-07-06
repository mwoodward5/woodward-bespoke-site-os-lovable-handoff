import "./styles.css";
import type { ReactNode } from "react";
/**
 * Torn Paper — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTornPaper({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-torn-paper">
      <div className="rfx-torn-paper__inner">
        {children ?? <h2>Torn Paper</h2>}
      </div>
    </section>
  );
}
export default RfxTornPaper;
