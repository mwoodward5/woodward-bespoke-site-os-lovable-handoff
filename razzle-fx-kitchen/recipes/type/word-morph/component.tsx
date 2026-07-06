import "./styles.css";
import type { ReactNode } from "react";
/**
 * Word Morph — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxWordMorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-word-morph">
      <div className="rfx-word-morph__inner">
        {children ?? <h2>Word Morph</h2>}
      </div>
    </section>
  );
}
export default RfxWordMorph;
