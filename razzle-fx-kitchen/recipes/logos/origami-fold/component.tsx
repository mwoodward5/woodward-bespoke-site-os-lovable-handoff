import "./styles.css";
import type { ReactNode } from "react";
/**
 * Origami Fold — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxOrigamiFold({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-origami-fold">
      <div className="rfx-origami-fold__inner">
        {children ?? <h2>Origami Fold</h2>}
      </div>
    </section>
  );
}
export default RfxOrigamiFold;
