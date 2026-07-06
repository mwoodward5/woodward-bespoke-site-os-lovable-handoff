import "./styles.css";
import type { ReactNode } from "react";
/**
 * Share Menu — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxShareMenu({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-share-menu">
      <div className="rfx-share-menu__inner">
        {children ?? <h2>Share Menu</h2>}
      </div>
    </section>
  );
}
export default RfxShareMenu;
