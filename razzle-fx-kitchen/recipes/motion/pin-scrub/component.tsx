import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pin Scrub — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPinScrub({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pin-scrub">
      <div className="rfx-pin-scrub__inner">
        {children ?? <h2>Pin Scrub</h2>}
      </div>
    </section>
  );
}
export default RfxPinScrub;
