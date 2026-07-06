import "./styles.css";
import type { ReactNode } from "react";
/**
 * Static Tv — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStaticTv({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-static-tv">
      <div className="rfx-static-tv__inner">
        {children ?? <h2>Static Tv</h2>}
      </div>
    </section>
  );
}
export default RfxStaticTv;
