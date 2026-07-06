import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hex Set — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHexSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hex-set">
      <div className="rfx-hex-set__inner">
        {children ?? <h2>Hex Set</h2>}
      </div>
    </section>
  );
}
export default RfxHexSet;
