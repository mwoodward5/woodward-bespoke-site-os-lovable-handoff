import "./styles.css";
import type { ReactNode } from "react";
/**
 * Long Shadow — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLongShadow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-long-shadow">
      <div className="rfx-long-shadow__inner">
        {children ?? <h2>Long Shadow</h2>}
      </div>
    </section>
  );
}
export default RfxLongShadow;
