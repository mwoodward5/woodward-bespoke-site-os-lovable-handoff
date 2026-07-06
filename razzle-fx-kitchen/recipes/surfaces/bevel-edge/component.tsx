import "./styles.css";
import type { ReactNode } from "react";
/**
 * Bevel Edge — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBevelEdge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-bevel-edge">
      <div className="rfx-bevel-edge__inner">
        {children ?? <h2>Bevel Edge</h2>}
      </div>
    </section>
  );
}
export default RfxBevelEdge;
