import "./styles.css";
import type { ReactNode } from "react";
/**
 * Drawer Push — ux recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxDrawerPush({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-drawer-push">
      <div className="rfx-drawer-push__inner">
        {children ?? <h2>Drawer Push</h2>}
      </div>
    </section>
  );
}
export default RfxDrawerPush;
