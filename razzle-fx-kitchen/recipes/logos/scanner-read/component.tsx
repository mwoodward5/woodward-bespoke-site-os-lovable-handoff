import "./styles.css";
import type { ReactNode } from "react";
/**
 * Scanner Read — logos recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxScannerRead({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-scanner-read">
      <div className="rfx-scanner-read__inner">
        {children ?? <h2>Scanner Read</h2>}
      </div>
    </section>
  );
}
export default RfxScannerRead;
