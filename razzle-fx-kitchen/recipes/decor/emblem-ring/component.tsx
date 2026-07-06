import "./styles.css";
import type { ReactNode } from "react";
/**
 * Emblem Ring — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxEmblemRing({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-emblem-ring">
      <div className="rfx-emblem-ring__inner">
        {children ?? <h2>Emblem Ring</h2>}
      </div>
    </section>
  );
}
export default RfxEmblemRing;
