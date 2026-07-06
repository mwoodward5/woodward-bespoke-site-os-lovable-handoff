import "./styles.css";
import type { ReactNode } from "react";
/**
 * Colored Shadow — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxColoredShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-colored-shadow">
      <div className="rfx-colored-shadow__inner">
        {children ?? <h2>Colored Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxColoredShadow;
