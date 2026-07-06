import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chase Lights — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxChaseLights({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chase-lights">
      <div className="rfx-chase-lights__inner">
        {children ?? <h2>Chase Lights</h2>}
      </div>
    </section>
  );
}
export default RfxChaseLights;
