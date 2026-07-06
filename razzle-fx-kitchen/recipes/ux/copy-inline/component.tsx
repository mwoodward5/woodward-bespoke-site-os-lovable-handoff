import "./styles.css";
import type { ReactNode } from "react";
/**
 * Copy Inline — ux recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxCopyInline({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-copy-inline">
      <div className="rfx-copy-inline__inner">
        {children ?? <h2>Copy Inline</h2>}
      </div>
    </section>
  );
}
export default RfxCopyInline;
