import "./styles.css";
import type { ReactNode } from "react";
/**
 * Coin Icon — icons recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCoinIcon({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-coin-icon">
      <div className="rfx-coin-icon__inner">
        {children ?? <h2>Coin Icon</h2>}
      </div>
    </section>
  );
}
export default RfxCoinIcon;
