import "./styles.css";
import type { ReactNode } from "react";
/**
 * Stock Crawl — type recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxStockCrawl({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-stock-crawl">
      <div className="rfx-stock-crawl__inner">
        {children ?? <h2>Stock Crawl</h2>}
      </div>
    </section>
  );
}
export default RfxStockCrawl;
