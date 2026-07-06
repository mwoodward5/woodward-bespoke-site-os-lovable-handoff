import "./styles.css";
import type { ReactNode } from "react";
/**
 * Aurora Borealis — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxAuroraBorealis({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-aurora-borealis">
      <div className="rfx-aurora-borealis__inner">
        {children ?? <h2>Aurora Borealis</h2>}
      </div>
    </section>
  );
}
export default RfxAuroraBorealis;
