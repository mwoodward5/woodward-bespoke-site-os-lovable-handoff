import "./styles.css";
import type { ReactNode } from "react";
/**
 * Clean Drop — logos recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCleanDrop({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-clean-drop">
      <div className="rfx-clean-drop__inner">
        {children ?? <h2>Clean Drop</h2>}
      </div>
    </section>
  );
}
export default RfxCleanDrop;
