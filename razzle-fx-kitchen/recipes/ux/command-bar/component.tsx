import "./styles.css";
import type { ReactNode } from "react";
/**
 * Command Bar — ux recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCommandBar({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-command-bar">
      <div className="rfx-command-bar__inner">
        {children ?? <h2>Command Bar</h2>}
      </div>
    </section>
  );
}
export default RfxCommandBar;
