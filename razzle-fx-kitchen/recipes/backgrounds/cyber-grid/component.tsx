import "./styles.css";
import type { ReactNode } from "react";
/**
 * Cyber Grid — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCyberGrid({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-cyber-grid">
      <div className="rfx-cyber-grid__inner">
        {children ?? <h2>Cyber Grid</h2>}
      </div>
    </section>
  );
}
export default RfxCyberGrid;
