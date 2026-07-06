import "./styles.css";
import type { ReactNode } from "react";
/**
 * Hard Shadow — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxHardShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-hard-shadow">
      <div className="rfx-hard-shadow__inner">
        {children ?? <h2>Hard Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxHardShadow;
