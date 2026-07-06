import "./styles.css";
import type { ReactNode } from "react";
/**
 * Price Tag — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxPriceTag({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-price-tag">
      <div className="rfx-price-tag__inner">
        {children ?? <h2>Price Tag</h2>}
      </div>
    </section>
  );
}
export default RfxPriceTag;
