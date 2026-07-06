import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shutter Diamond — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxShutterDiamond({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shutter-diamond">
      <div className="rfx-shutter-diamond__inner">
        {children ?? <h2>Shutter Diamond</h2>}
      </div>
    </section>
  );
}
export default RfxShutterDiamond;
