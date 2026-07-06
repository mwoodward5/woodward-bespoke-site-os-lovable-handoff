import "./styles.css";
import type { ReactNode } from "react";
/**
 * Beacon Strobe — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBeaconStrobe({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-beacon-strobe">
      <div className="rfx-beacon-strobe__inner">
        {children ?? <h2>Beacon Strobe</h2>}
      </div>
    </section>
  );
}
export default RfxBeaconStrobe;
