import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tokyo Rain — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxTokyoRain({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tokyo-rain">
      <div className="rfx-tokyo-rain__inner">
        {children ?? <h2>Tokyo Rain</h2>}
      </div>
    </section>
  );
}
export default RfxTokyoRain;
