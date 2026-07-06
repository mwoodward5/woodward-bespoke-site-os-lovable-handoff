import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spot Lit — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSpotLit({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spot-lit">
      <div className="rfx-spot-lit__inner">
        {children ?? <h2>Spot Lit</h2>}
      </div>
    </section>
  );
}
export default RfxSpotLit;
