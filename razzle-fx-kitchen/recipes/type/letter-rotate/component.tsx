import "./styles.css";
import type { ReactNode } from "react";
/**
 * Letter Rotate — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLetterRotate({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-letter-rotate">
      <div className="rfx-letter-rotate__inner">
        {children ?? <h2>Letter Rotate</h2>}
      </div>
    </section>
  );
}
export default RfxLetterRotate;
