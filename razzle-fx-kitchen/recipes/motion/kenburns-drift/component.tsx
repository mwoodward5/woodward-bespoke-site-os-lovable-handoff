import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kenburns Drift — motion recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxKenburnsDrift({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kenburns-drift">
      <div className="rfx-kenburns-drift__inner">
        {children ?? <h2>Kenburns Drift</h2>}
      </div>
    </section>
  );
}
export default RfxKenburnsDrift;
