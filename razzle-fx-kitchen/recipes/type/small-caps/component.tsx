import "./styles.css";
import type { ReactNode } from "react";
/**
 * Small Caps — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSmallCaps({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-small-caps">
      <div className="rfx-small-caps__inner">
        {children ?? <h2>Small Caps</h2>}
      </div>
    </section>
  );
}
export default RfxSmallCaps;
