import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kbd Badge — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxKbdBadge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kbd-badge">
      <div className="rfx-kbd-badge__inner">
        {children ?? <h2>Kbd Badge</h2>}
      </div>
    </section>
  );
}
export default RfxKbdBadge;
