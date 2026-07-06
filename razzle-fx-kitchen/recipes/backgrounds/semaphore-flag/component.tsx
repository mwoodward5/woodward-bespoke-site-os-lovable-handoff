import "./styles.css";
import type { ReactNode } from "react";
/**
 * Semaphore Flag — backgrounds recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxSemaphoreFlag({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-semaphore-flag">
      <div className="rfx-semaphore-flag__inner">
        {children ?? <h2>Semaphore Flag</h2>}
      </div>
    </section>
  );
}
export default RfxSemaphoreFlag;
