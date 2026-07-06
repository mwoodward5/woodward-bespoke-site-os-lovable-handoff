import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ascii Rain — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxAsciiRain({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ascii-rain">
      <div className="rfx-ascii-rain__inner">
        {children ?? <h2>Ascii Rain</h2>}
      </div>
    </section>
  );
}
export default RfxAsciiRain;
