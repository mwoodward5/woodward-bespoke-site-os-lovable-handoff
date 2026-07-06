import "./styles.css";
import type { ReactNode } from "react";
/**
 * Case Morph — type recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxCaseMorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-case-morph">
      <div className="rfx-case-morph__inner">
        {children ?? <h2>Case Morph</h2>}
      </div>
    </section>
  );
}
export default RfxCaseMorph;
