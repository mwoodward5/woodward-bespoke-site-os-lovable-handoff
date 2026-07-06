import "./styles.css";
import type { ReactNode } from "react";
/**
 * Frost Cover — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxFrostCover({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-frost-cover">
      <div className="rfx-frost-cover__inner">
        {children ?? <h2>Frost Cover</h2>}
      </div>
    </section>
  );
}
export default RfxFrostCover;
