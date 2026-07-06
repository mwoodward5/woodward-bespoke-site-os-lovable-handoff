import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gold Leaf — logos recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxGoldLeaf({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gold-leaf">
      <div className="rfx-gold-leaf__inner">
        {children ?? <h2>Gold Leaf</h2>}
      </div>
    </section>
  );
}
export default RfxGoldLeaf;
