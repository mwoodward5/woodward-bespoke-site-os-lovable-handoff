import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brushed Metal — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBrushedMetal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brushed-metal">
      <div className="rfx-brushed-metal__inner">
        {children ?? <h2>Brushed Metal</h2>}
      </div>
    </section>
  );
}
export default RfxBrushedMetal;
