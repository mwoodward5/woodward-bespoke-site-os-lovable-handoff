import "./styles.css";
import type { ReactNode } from "react";
/**
 * Material Flat — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxMaterialFlat({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-material-flat">
      <div className="rfx-material-flat__inner">
        {children ?? <h2>Material Flat</h2>}
      </div>
    </section>
  );
}
export default RfxMaterialFlat;
