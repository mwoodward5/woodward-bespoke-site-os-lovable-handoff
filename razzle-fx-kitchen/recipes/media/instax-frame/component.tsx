import "./styles.css";
import type { ReactNode } from "react";
/**
 * Instax Frame — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxInstaxFrame({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-instax-frame">
      <div className="rfx-instax-frame__inner">
        {children ?? <h2>Instax Frame</h2>}
      </div>
    </section>
  );
}
export default RfxInstaxFrame;
