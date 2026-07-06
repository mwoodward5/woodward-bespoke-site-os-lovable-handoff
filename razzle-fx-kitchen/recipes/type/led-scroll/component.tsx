import "./styles.css";
import type { ReactNode } from "react";
/**
 * Led Scroll — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLedScroll({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-led-scroll">
      <div className="rfx-led-scroll__inner">
        {children ?? <h2>Led Scroll</h2>}
      </div>
    </section>
  );
}
export default RfxLedScroll;
