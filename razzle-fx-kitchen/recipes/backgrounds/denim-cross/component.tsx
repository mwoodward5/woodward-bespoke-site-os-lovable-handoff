import "./styles.css";
import type { ReactNode } from "react";
/**
 * Denim Cross — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxDenimCross({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-denim-cross">
      <div className="rfx-denim-cross__inner">
        {children ?? <h2>Denim Cross</h2>}
      </div>
    </section>
  );
}
export default RfxDenimCross;
