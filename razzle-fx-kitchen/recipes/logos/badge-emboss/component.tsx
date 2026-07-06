import "./styles.css";
import type { ReactNode } from "react";
/**
 * Badge Emboss — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxBadgeEmboss({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-badge-emboss">
      <div className="rfx-badge-emboss__inner">
        {children ?? <h2>Badge Emboss</h2>}
      </div>
    </section>
  );
}
export default RfxBadgeEmboss;
