import "./styles.css";
import type { ReactNode } from "react";
/**
 * Letterpress — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxLetterpress({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-letterpress">
      <div className="rfx-letterpress__inner">
        {children ?? <h2>Letterpress</h2>}
      </div>
    </section>
  );
}
export default RfxLetterpress;
