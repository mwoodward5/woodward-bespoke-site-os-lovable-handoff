import "./styles.css";
import type { ReactNode } from "react";
/**
 * Material Elevation — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxMaterialElevation({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-material-elevation">
      <div className="rfx-material-elevation__inner">
        {children ?? <h2>Material Elevation</h2>}
      </div>
    </section>
  );
}
export default RfxMaterialElevation;
