// import type { Incident } from "./types";

/**
 * API NOTES (from backend docs):
 * - Incident Service: /api/incidents (report, sos, get by id, update status, history)
 * - Dispatch Service: /api/dispatch (assign, reassign, active)
 * - Officer Service: /api/officers (status, accept/reject, notes)
 * - Notification Service: /api/notifications (send, broadcast)
 * - Analytics Service: /api/analytics (heatmap, trends, performance)
 * Auth via Keycloak/JWT at API Gateway.
 *
 * Sources:
 *  Backend Overview Doc (microservices & endpoints). :contentReference[oaicite:0]{index=0}
 *  Entities & Repositories (DB entities per service). :contentReference[oaicite:1]{index=1}
 */

// Example stubs (uncomment and adapt when backend is ready):
// export async function fetchActiveAssignments() {
//   const res = await fetch("/api/dispatch/active", { headers: { Authorization: `Bearer ${yourToken}` } });
//   if (!res.ok) throw new Error("Failed to load active assignments");
//   return res.json();
// }

// export async function assignOfficer(payload: { incidentId: string; officerId: string }) {
//   const res = await fetch("/api/dispatch/assign", {
//     method: "POST",
//     headers: { "Content-Type": "application/json", Authorization: `Bearer ${yourToken}` },
//     body: JSON.stringify(payload),
//   });
//   if (!res.ok) throw new Error("Failed to assign officer");
//   return res.json();
// }


// OFFICER STATUS (Dispatch/Officer service)
// export async function fetchOfficerStatuses() {
//   const res = await fetch("/api/officers/status", { headers: { Authorization: `Bearer ${token}` } });
//   if (!res.ok) throw new Error("Failed to load officer status");
//   return res.json() as Promise<Officer[]>;
// }

// ANALYTICS
// export async function fetchAnalyticsOverview() {
//   const res = await fetch("/api/analytics/overview");
//   if (!res.ok) throw new Error("Failed to load analytics");
//   return res.json() as Promise<AnalyticsKPI[]>;
// }