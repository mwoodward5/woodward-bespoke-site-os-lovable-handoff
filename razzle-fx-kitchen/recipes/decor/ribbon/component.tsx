import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ribbon — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxRibbon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ribbon">
      <div className="rfx-ribbon__inner">
        {children ?? <h2>Ribbon</h2>}
      </div>
    </section>
  );
}
export default RfxRibbon;
