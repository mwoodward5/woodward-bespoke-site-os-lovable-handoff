import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cyber Glitch — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCyberGlitch({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cyber-glitch">
      <div className="rfx-cyber-glitch__inner">
        {children ?? <h2>Cyber Glitch</h2>}
      </div>
    </section>
  );
}
export default RfxCyberGlitch;
