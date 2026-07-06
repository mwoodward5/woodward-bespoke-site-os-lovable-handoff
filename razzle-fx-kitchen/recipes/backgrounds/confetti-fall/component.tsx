import "./styles.css";
import type { ReactNode } from "react";
/**
 * Confetti Fall — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxConfettiFall({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-confetti-fall">
      <div className="rfx-confetti-fall__inner">
        {children ?? <h2>Confetti Fall</h2>}
      </div>
    </section>
  );
}
export default RfxConfettiFall;
