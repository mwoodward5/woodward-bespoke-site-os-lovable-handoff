import "./styles.css";
import type { ReactNode } from "react";
/**
 * Coupon Cut — decor recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxCouponCut({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-coupon-cut">
      <div className="rfx-coupon-cut__inner">
        {children ?? <h2>Coupon Cut</h2>}
      </div>
    </section>
  );
}
export default RfxCouponCut;
