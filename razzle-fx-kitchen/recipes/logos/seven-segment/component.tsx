import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seven Segment — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSevenSegment({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seven-segment">
      <div className="rfx-seven-segment__inner">
        {children ?? <h2>Seven Segment</h2>}
      </div>
    </section>
  );
}
export default RfxSevenSegment;
