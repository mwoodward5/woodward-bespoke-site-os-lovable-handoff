import "./styles.css";
import type { ReactNode } from "react";
/**
 * Brutalist Hard — surfaces recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxBrutalistHard({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-brutalist-hard">
      <div className="rfx-brutalist-hard__inner">
        {children ?? <h2>Brutalist Hard</h2>}
      </div>
    </section>
  );
}
export default RfxBrutalistHard;
