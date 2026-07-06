import "./styles.css";
import type { ReactNode } from "react";
/**
 * Polished Metal — surfaces recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxPolishedMetal({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-polished-metal">
      <div className="rfx-polished-metal__inner">
        {children ?? <h2>Polished Metal</h2>}
      </div>
    </section>
  );
}
export default RfxPolishedMetal;
