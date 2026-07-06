import "./styles.css";
import type { ReactNode } from "react";
/**
 * Claymorph — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxClaymorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-claymorph">
      <div className="rfx-claymorph__inner">
        {children ?? <h2>Claymorph</h2>}
      </div>
    </section>
  );
}
export default RfxClaymorph;
