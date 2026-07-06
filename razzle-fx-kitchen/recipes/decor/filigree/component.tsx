import "./styles.css";
import type { ReactNode } from "react";
/**
 * Filigree — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFiligree({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-filigree">
      <div className="rfx-filigree__inner">
        {children ?? <h2>Filigree</h2>}
      </div>
    </section>
  );
}
export default RfxFiligree;
