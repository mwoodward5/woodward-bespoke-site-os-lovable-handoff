import "./styles.css";
import type { ReactNode } from "react";
/**
 * Band Stripe — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxBandStripe({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-band-stripe">
      <div className="rfx-band-stripe__inner">
        {children ?? <h2>Band Stripe</h2>}
      </div>
    </section>
  );
}
export default RfxBandStripe;
