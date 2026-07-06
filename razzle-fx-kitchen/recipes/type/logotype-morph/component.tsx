import "./styles.css";
import type { ReactNode } from "react";
/**
 * Logotype Morph — type recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxLogotypeMorph({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-logotype-morph">
      <div className="rfx-logotype-morph__inner">
        {children ?? <h2>Logotype Morph</h2>}
      </div>
    </section>
  );
}
export default RfxLogotypeMorph;
