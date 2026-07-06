import "./styles.css";
import type { ReactNode } from "react";
/**
 * Anagram Shuffle — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxAnagramShuffle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-anagram-shuffle">
      <div className="rfx-anagram-shuffle__inner">
        {children ?? <h2>Anagram Shuffle</h2>}
      </div>
    </section>
  );
}
export default RfxAnagramShuffle;
