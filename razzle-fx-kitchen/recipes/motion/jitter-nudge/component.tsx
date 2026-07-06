import "./styles.css";
import type { ReactNode } from "react";
/**
 * Jitter Nudge — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxJitterNudge({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-jitter-nudge">
      <div className="rfx-jitter-nudge__inner">
        {children ?? <h2>Jitter Nudge</h2>}
      </div>
    </section>
  );
}
export default RfxJitterNudge;
