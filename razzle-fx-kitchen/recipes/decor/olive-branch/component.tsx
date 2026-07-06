import "./styles.css";
import type { ReactNode } from "react";
/**
 * Olive Branch — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxOliveBranch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-olive-branch">
      <div className="rfx-olive-branch__inner">
        {children ?? <h2>Olive Branch</h2>}
      </div>
    </section>
  );
}
export default RfxOliveBranch;
