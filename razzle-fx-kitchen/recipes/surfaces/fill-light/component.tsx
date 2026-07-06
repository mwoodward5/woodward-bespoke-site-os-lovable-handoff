import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fill Light — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxFillLight({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fill-light">
      <div className="rfx-fill-light__inner">
        {children ?? <h2>Fill Light</h2>}
      </div>
    </section>
  );
}
export default RfxFillLight;
