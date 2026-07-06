import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hologram Flicker — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHologramFlicker({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hologram-flicker">
      <div className="rfx-hologram-flicker__inner">
        {children ?? <h2>Hologram Flicker</h2>}
      </div>
    </section>
  );
}
export default RfxHologramFlicker;
