import "./styles.css";
import type { ReactNode } from "react";
/**
 * Tape Reel — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxTapeReel({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-tape-reel">
      <div className="rfx-tape-reel__inner">
        {children ?? <h2>Tape Reel</h2>}
      </div>
    </section>
  );
}
export default RfxTapeReel;
