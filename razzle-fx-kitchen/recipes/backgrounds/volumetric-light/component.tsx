import "./styles.css";
import type { ReactNode } from "react";
/**
 * Volumetric Light — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxVolumetricLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-volumetric-light">
      <div className="rfx-volumetric-light__inner">
        {children ?? <h2>Volumetric Light</h2>}
      </div>
    </section>
  );
}
export default RfxVolumetricLight;
