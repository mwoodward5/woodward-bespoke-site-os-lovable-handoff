import "./styles.css";
import type { ReactNode } from "react";
/**
 * Satin Finish — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSatinFinish({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-satin-finish">
      <div className="rfx-satin-finish__inner">
        {children ?? <h2>Satin Finish</h2>}
      </div>
    </section>
  );
}
export default RfxSatinFinish;
