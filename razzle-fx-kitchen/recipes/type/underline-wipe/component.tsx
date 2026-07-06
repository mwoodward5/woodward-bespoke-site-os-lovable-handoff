import "./styles.css";
import type { ReactNode } from "react";
/**
 * Underline Wipe — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxUnderlineWipe({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-underline-wipe">
      <div className="rfx-underline-wipe__inner">
        {children ?? <h2>Underline Wipe</h2>}
      </div>
    </section>
  );
}
export default RfxUnderlineWipe;
