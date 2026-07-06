import "./styles.css";
import type { ReactNode } from "react";
/**
 * Monogram Frame — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMonogramFrame({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-monogram-frame">
      <div className="rfx-monogram-frame__inner">
        {children ?? <h2>Monogram Frame</h2>}
      </div>
    </section>
  );
}
export default RfxMonogramFrame;
