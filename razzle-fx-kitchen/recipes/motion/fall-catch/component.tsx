import "./styles.css";
import type { ReactNode } from "react";
/**
 * Fall Catch — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFallCatch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-fall-catch">
      <div className="rfx-fall-catch__inner">
        {children ?? <h2>Fall Catch</h2>}
      </div>
    </section>
  );
}
export default RfxFallCatch;
