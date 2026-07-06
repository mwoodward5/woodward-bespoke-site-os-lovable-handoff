import "./styles.css";
import type { ReactNode } from "react";
/**
 * Card Stack — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxCardStack({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-card-stack">
      <div className="rfx-card-stack__inner">
        {children ?? <h2>Card Stack</h2>}
      </div>
    </section>
  );
}
export default RfxCardStack;
