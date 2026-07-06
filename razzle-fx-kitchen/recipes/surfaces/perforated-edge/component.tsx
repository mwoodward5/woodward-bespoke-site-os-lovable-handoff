import "./styles.css";
import type { ReactNode } from "react";
/**
 * Perforated Edge — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPerforatedEdge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-perforated-edge">
      <div className="rfx-perforated-edge__inner">
        {children ?? <h2>Perforated Edge</h2>}
      </div>
    </section>
  );
}
export default RfxPerforatedEdge;
