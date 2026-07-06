import "./styles.css";
import type { ReactNode } from "react";
/**
 * Halftone — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxHalftone({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-halftone">
      <div className="rfx-halftone__inner">
        {children ?? <h2>Halftone</h2>}
      </div>
    </section>
  );
}
export default RfxHalftone;
