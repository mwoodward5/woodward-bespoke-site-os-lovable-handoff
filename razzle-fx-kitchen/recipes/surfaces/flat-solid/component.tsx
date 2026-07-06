import "./styles.css";
import type { ReactNode } from "react";
/**
 * Flat Solid — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFlatSolid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-flat-solid">
      <div className="rfx-flat-solid__inner">
        {children ?? <h2>Flat Solid</h2>}
      </div>
    </section>
  );
}
export default RfxFlatSolid;
