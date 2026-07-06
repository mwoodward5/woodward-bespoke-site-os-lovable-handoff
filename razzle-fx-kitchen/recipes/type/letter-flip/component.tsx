import "./styles.css";
import type { ReactNode } from "react";
/**
 * Letter Flip — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLetterFlip({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-letter-flip">
      <div className="rfx-letter-flip__inner">
        {children ?? <h2>Letter Flip</h2>}
      </div>
    </section>
  );
}
export default RfxLetterFlip;
