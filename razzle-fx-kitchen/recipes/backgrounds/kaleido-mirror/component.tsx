import "./styles.css";
import type { ReactNode } from "react";
/**
 * Kaleido Mirror — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxKaleidoMirror({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-kaleido-mirror">
      <div className="rfx-kaleido-mirror__inner">
        {children ?? <h2>Kaleido Mirror</h2>}
      </div>
    </section>
  );
}
export default RfxKaleidoMirror;
