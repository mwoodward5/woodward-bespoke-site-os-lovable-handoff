import "./styles.css";
import type { ReactNode } from "react";
/**
 * Offset Shadow — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOffsetShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-offset-shadow">
      <div className="rfx-offset-shadow__inner">
        {children ?? <h2>Offset Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxOffsetShadow;
