import "./styles.css";
import type { ReactNode } from "react";
/**
 * Flip Card — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxFlipCard({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-flip-card">
      <div className="rfx-flip-card__inner">
        {children ?? <h2>Flip Card</h2>}
      </div>
    </section>
  );
}
export default RfxFlipCard;
