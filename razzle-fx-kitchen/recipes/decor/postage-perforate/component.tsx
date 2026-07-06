import "./styles.css";
import type { ReactNode } from "react";
/**
 * Postage Perforate — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPostagePerforate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-postage-perforate">
      <div className="rfx-postage-perforate__inner">
        {children ?? <h2>Postage Perforate</h2>}
      </div>
    </section>
  );
}
export default RfxPostagePerforate;
