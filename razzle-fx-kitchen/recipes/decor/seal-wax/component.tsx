import "./styles.css";
import type { ReactNode } from "react";
/**
 * Seal Wax — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSealWax({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-seal-wax">
      <div className="rfx-seal-wax__inner">
        {children ?? <h2>Seal Wax</h2>}
      </div>
    </section>
  );
}
export default RfxSealWax;
