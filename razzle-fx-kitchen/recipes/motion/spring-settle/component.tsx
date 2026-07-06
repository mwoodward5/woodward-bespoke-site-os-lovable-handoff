import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spring Settle — motion recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSpringSettle({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spring-settle">
      <div className="rfx-spring-settle__inner">
        {children ?? <h2>Spring Settle</h2>}
      </div>
    </section>
  );
}
export default RfxSpringSettle;
