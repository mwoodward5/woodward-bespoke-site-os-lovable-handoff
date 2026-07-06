import "./styles.css";
import type { ReactNode } from "react";
/**
 * Square Set — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSquareSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-square-set">
      <div className="rfx-square-set__inner">
        {children ?? <h2>Square Set</h2>}
      </div>
    </section>
  );
}
export default RfxSquareSet;
