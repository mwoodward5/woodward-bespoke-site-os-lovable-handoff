import "./styles.css";
import type { ReactNode } from "react";
/**
 * Push In — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPushIn({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-push-in">
      <div className="rfx-push-in__inner">
        {children ?? <h2>Push In</h2>}
      </div>
    </section>
  );
}
export default RfxPushIn;
