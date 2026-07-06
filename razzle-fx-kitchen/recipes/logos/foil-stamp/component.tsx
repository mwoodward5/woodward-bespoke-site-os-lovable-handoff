import "./styles.css";
import type { ReactNode } from "react";
/**
 * Foil Stamp — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFoilStamp({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-foil-stamp">
      <div className="rfx-foil-stamp__inner">
        {children ?? <h2>Foil Stamp</h2>}
      </div>
    </section>
  );
}
export default RfxFoilStamp;
