import "./styles.css";
import type { ReactNode } from "react";
/**
 * Letter Blur — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLetterBlur({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-letter-blur">
      <div className="rfx-letter-blur__inner">
        {children ?? <h2>Letter Blur</h2>}
      </div>
    </section>
  );
}
export default RfxLetterBlur;
