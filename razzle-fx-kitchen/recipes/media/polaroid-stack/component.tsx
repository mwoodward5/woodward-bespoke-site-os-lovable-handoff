import "./styles.css";
import type { ReactNode } from "react";
/**
 * Polaroid Stack — media recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxPolaroidStack({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-polaroid-stack">
      <div className="rfx-polaroid-stack__inner">
        {children ?? <h2>Polaroid Stack</h2>}
      </div>
    </section>
  );
}
export default RfxPolaroidStack;
