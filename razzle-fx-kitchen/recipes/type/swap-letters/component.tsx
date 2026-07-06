import "./styles.css";
import type { ReactNode } from "react";
/**
 * Swap Letters — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSwapLetters({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-swap-letters">
      <div className="rfx-swap-letters__inner">
        {children ?? <h2>Swap Letters</h2>}
      </div>
    </section>
  );
}
export default RfxSwapLetters;
