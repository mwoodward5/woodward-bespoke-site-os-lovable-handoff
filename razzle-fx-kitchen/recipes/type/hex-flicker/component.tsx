import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hex Flicker — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHexFlicker({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hex-flicker">
      <div className="rfx-hex-flicker__inner">
        {children ?? <h2>Hex Flicker</h2>}
      </div>
    </section>
  );
}
export default RfxHexFlicker;
