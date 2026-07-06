import "./styles.css";
import type { ReactNode } from "react";
/**
 * Linear Crawl — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxLinearCrawl({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-linear-crawl">
      <div className="rfx-linear-crawl__inner">
        {children ?? <h2>Linear Crawl</h2>}
      </div>
    </section>
  );
}
export default RfxLinearCrawl;
