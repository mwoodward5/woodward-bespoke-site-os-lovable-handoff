import "./styles.css";
import type { ReactNode } from "react";
/**
 * Boarding Pass — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxBoardingPass({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-boarding-pass">
      <div className="rfx-boarding-pass__inner">
        {children ?? <h2>Boarding Pass</h2>}
      </div>
    </section>
  );
}
export default RfxBoardingPass;
