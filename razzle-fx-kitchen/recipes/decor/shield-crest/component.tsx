import "./styles.css";
import type { ReactNode } from "react";
/**
 * Shield Crest — decor recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxShieldCrest({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-shield-crest">
      <div className="rfx-shield-crest__inner">
        {children ?? <h2>Shield Crest</h2>}
      </div>
    </section>
  );
}
export default RfxShieldCrest;
