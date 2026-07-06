import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ink Splat — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxInkSplat({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ink-splat">
      <div className="rfx-ink-splat__inner">
        {children ?? <h2>Ink Splat</h2>}
      </div>
    </section>
  );
}
export default RfxInkSplat;
