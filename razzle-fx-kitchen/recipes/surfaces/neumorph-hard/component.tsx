import "./styles.css";
import type { ReactNode } from "react";
/**
 * Neumorph Hard — surfaces recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxNeumorphHard({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-neumorph-hard">
      <div className="rfx-neumorph-hard__inner">
        {children ?? <h2>Neumorph Hard</h2>}
      </div>
    </section>
  );
}
export default RfxNeumorphHard;
