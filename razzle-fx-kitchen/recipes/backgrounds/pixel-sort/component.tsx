import "./styles.css";
import type { ReactNode } from "react";
/**
 * Pixel Sort — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxPixelSort({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-pixel-sort">
      <div className="rfx-pixel-sort__inner">
        {children ?? <h2>Pixel Sort</h2>}
      </div>
    </section>
  );
}
export default RfxPixelSort;
