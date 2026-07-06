import "./styles.css";
import type { ReactNode } from "react";
/**
 * Morse Code — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxMorseCode({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-morse-code">
      <div className="rfx-morse-code__inner">
        {children ?? <h2>Morse Code</h2>}
      </div>
    </section>
  );
}
export default RfxMorseCode;
