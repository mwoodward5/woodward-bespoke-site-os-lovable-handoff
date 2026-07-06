import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gravity Drop — motion recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGravityDrop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gravity-drop">
      <div className="rfx-gravity-drop__inner">
        {children ?? <h2>Gravity Drop</h2>}
      </div>
    </section>
  );
}
export default RfxGravityDrop;
