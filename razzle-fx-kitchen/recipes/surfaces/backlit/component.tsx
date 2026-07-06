import "./styles.css";
import type { ReactNode } from "react";
/**
 * Backlit — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBacklit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-backlit">
      <div className="rfx-backlit__inner">
        {children ?? <h2>Backlit</h2>}
      </div>
    </section>
  );
}
export default RfxBacklit;
