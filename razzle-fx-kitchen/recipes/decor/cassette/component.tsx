import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cassette — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCassette({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cassette">
      <div className="rfx-cassette__inner">
        {children ?? <h2>Cassette</h2>}
      </div>
    </section>
  );
}
export default RfxCassette;
