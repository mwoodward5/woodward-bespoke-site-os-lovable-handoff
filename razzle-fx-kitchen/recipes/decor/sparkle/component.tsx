import "./styles.css";
import type { ReactNode } from "react";
/**
 * Sparkle — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxSparkle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-sparkle">
      <div className="rfx-sparkle__inner">
        {children ?? <h2>Sparkle</h2>}
      </div>
    </section>
  );
}
export default RfxSparkle;
