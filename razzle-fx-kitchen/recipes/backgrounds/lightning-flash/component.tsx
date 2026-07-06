import "./styles.css";
import type { ReactNode } from "react";
/**
 * Lightning Flash — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLightningFlash({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-lightning-flash">
      <div className="rfx-lightning-flash__inner">
        {children ?? <h2>Lightning Flash</h2>}
      </div>
    </section>
  );
}
export default RfxLightningFlash;
