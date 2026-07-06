import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ink Bloom — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxInkBloom({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ink-bloom">
      <div className="rfx-ink-bloom__inner">
        {children ?? <h2>Ink Bloom</h2>}
      </div>
    </section>
  );
}
export default RfxInkBloom;
