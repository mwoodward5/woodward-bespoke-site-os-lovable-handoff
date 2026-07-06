import "./styles.css";
import type { ReactNode } from "react";
/**
 * Solid Fill — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSolidFill({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-solid-fill">
      <div className="rfx-solid-fill__inner">
        {children ?? <h2>Solid Fill</h2>}
      </div>
    </section>
  );
}
export default RfxSolidFill;
