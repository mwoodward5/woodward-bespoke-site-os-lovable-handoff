import "./styles.css";
import type { ReactNode } from "react";
/**
 * Luggage Tag — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLuggageTag({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-luggage-tag">
      <div className="rfx-luggage-tag__inner">
        {children ?? <h2>Luggage Tag</h2>}
      </div>
    </section>
  );
}
export default RfxLuggageTag;
