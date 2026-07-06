import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ticker Tape — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxTickerTape({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ticker-tape">
      <div className="rfx-ticker-tape__inner">
        {children ?? <h2>Ticker Tape</h2>}
      </div>
    </section>
  );
}
export default RfxTickerTape;
