import "./styles.css";
import type { ReactNode } from "react";
/**
 * Strike Through — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxStrikeThrough({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-strike-through">
      <div className="rfx-strike-through__inner">
        {children ?? <h2>Strike Through</h2>}
      </div>
    </section>
  );
}
export default RfxStrikeThrough;
