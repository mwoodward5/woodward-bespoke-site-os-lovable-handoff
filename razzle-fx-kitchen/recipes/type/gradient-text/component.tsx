import "./styles.css";
import type { ReactNode } from "react";
/**
 * Gradient Text — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxGradientText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-gradient-text">
      <div className="rfx-gradient-text__inner">
        {children ?? <h2>Gradient Text</h2>}
      </div>
    </section>
  );
}
export default RfxGradientText;
