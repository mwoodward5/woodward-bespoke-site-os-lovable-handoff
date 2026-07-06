import "./styles.css";
import type { ReactNode } from "react";
/**
 * Chalk Text — type recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxChalkText({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-chalk-text">
      <div className="rfx-chalk-text__inner">
        {children ?? <h2>Chalk Text</h2>}
      </div>
    </section>
  );
}
export default RfxChalkText;
