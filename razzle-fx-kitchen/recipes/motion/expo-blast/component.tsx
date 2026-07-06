import "./styles.css";
import type { ReactNode } from "react";
/**
 * Expo Blast — motion recipe
 * Perf: cheap | Reduced-motion: honored
 */
export function RfxExpoBlast({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-expo-blast">
      <div className="rfx-expo-blast__inner">
        {children ?? <h2>Expo Blast</h2>}
      </div>
    </section>
  );
}
export default RfxExpoBlast;
