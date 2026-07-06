import "./styles.css";
import type { ReactNode } from "react";
/**
 * Onyx Slab — backgrounds recipe
 * Perf: expensive | Reduced-motion: honored
 */
export function RfxOnyxSlab({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-onyx-slab">
      <div className="rfx-onyx-slab__inner">
        {children ?? <h2>Onyx Slab</h2>}
      </div>
    </section>
  );
}
export default RfxOnyxSlab;
