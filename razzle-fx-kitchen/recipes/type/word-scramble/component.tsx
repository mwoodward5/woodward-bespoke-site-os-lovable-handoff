import "./styles.css";
import type { ReactNode } from "react";
/**
 * Word Scramble — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxWordScramble({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-word-scramble">
      <div className="rfx-word-scramble__inner">
        {children ?? <h2>Word Scramble</h2>}
      </div>
    </section>
  );
}
export default RfxWordScramble;
