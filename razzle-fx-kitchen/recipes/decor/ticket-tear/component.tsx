import "./styles.css";
import type { ReactNode } from "react";
/**
 * Ticket Tear — decor recipe
 * Perf: free | Reduced-motion: honored
 */
export function RfxTicketTear({ children }: { children?: ReactNode }) {
  return (
    <section className="rfx-ticket-tear">
      <div className="rfx-ticket-tear__inner">
        {children ?? <h2>Ticket Tear</h2>}
      </div>
    </section>
  );
}
export default RfxTicketTear;
