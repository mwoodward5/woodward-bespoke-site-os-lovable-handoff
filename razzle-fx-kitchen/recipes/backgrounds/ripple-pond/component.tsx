import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ripple Pond — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxRipplePond({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ripple-pond">
      <div className="rfx-ripple-pond__inner">
        {children ?? <h2>Ripple Pond</h2>}
      </div>
    </section>
  );
}
export default RfxRipplePond;
