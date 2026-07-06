import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kenburns Slow — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxKenburnsSlow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kenburns-slow">
      <div className="rfx-kenburns-slow__inner">
        {children ?? <h2>Kenburns Slow</h2>}
      </div>
    </section>
  );
}
export default RfxKenburnsSlow;
