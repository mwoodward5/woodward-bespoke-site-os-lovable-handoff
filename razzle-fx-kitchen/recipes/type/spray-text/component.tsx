import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spray Text — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSprayText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spray-text">
      <div className="rfx-spray-text__inner">
        {children ?? <h2>Spray Text</h2>}
      </div>
    </section>
  );
}
export default RfxSprayText;
