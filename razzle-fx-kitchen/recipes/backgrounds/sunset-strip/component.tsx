import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sunset Strip — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSunsetStrip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sunset-strip">
      <div className="rfx-sunset-strip__inner">
        {children ?? <h2>Sunset Strip</h2>}
      </div>
    </section>
  );
}
export default RfxSunsetStrip;
