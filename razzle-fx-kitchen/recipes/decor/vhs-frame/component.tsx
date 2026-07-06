import "./styles.css";
import type { ReactNode } from "react";
/**
 * Vhs Frame — decor recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxVhsFrame({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-vhs-frame">
      <div className="rfx-vhs-frame__inner">
        {children ?? <h2>Vhs Frame</h2>}
      </div>
    </section>
  );
}
export default RfxVhsFrame;
