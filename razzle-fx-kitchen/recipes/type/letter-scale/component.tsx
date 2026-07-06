import "./styles.css";
import type { ReactNode } from "react";
/**
 * Letter Scale — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLetterScale({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-letter-scale">
      <div className="rfx-letter-scale__inner">
        {children ?? <h2>Letter Scale</h2>}
      </div>
    </section>
  );
}
export default RfxLetterScale;
