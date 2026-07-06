import "./styles.css";
import type { ReactNode } from "react";
/**
 * Filled Outline — icons recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFilledOutline({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-filled-outline">
      <div className="rfx-filled-outline__inner">
        {children ?? <h2>Filled Outline</h2>}
      </div>
    </section>
  );
}
export default RfxFilledOutline;
