import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shadow 3d — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxShadow3d({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shadow-3d">
      <div className="rfx-shadow-3d__inner">
        {children ?? <h2>Shadow 3d</h2>}
      </div>
    </section>
  );
}
export default RfxShadow3d;
