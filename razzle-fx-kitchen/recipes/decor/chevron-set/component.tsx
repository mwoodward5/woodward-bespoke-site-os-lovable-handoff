import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chevron Set — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxChevronSet({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chevron-set">
      <div className="rfx-chevron-set__inner">
        {children ?? <h2>Chevron Set</h2>}
      </div>
    </section>
  );
}
export default RfxChevronSet;
