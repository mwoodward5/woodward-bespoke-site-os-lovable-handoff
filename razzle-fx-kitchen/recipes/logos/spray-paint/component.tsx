import "./styles.css";
import type { ReactNode } from "react";
/**
 * Spray Paint — logos recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxSprayPaint({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-spray-paint">
      <div className="rfx-spray-paint__inner">
        {children ?? <h2>Spray Paint</h2>}
      </div>
    </section>
  );
}
export default RfxSprayPaint;
