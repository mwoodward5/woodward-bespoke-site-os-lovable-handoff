import "./styles.css";
import type { ReactNode } from "react";
/**
 * Paper Shadow — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPaperShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-paper-shadow">
      <div className="rfx-paper-shadow__inner">
        {children ?? <h2>Paper Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxPaperShadow;
