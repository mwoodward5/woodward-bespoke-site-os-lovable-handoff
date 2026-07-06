import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ease Out — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxEaseOut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ease-out">
      <div className="rfx-ease-out__inner">
        {children ?? <h2>Ease Out</h2>}
      </div>
    </section>
  );
}
export default RfxEaseOut;
