import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dust Motes — backgrounds recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDustMotes({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dust-motes">
      <div className="rfx-dust-motes__inner">
        {children ?? <h2>Dust Motes</h2>}
      </div>
    </section>
  );
}
export default RfxDustMotes;
