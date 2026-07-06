import "./styles.css";
import type { ReactNode } from "react";
/**
 * Dogeared — surfaces recipe
 * Perf: moderate | Reduced-motion: honored
 */
export function RfxDogeared({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-dogeared">
      <div className="rfx-dogeared__inner">
        {children ?? <h2>Dogeared</h2>}
      </div>
    </section>
  );
}
export default RfxDogeared;
