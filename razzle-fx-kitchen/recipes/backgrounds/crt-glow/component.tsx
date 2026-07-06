import "./styles.css";
import type { ReactNode } from "react";
/**
 * Crt Glow — backgrounds recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCrtGlow({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-crt-glow">
      <div className="rfx-crt-glow__inner">
        {children ?? <h2>Crt Glow</h2>}
      </div>
    </section>
  );
}
export default RfxCrtGlow;
