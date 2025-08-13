export type Priority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface KPI {
  label: string;
  value: number | string;
  icon: "alert" | "users" | "clock" | "trend";
}

export interface Incident {
  id: string;
  type: "Crime Report" | "Accident Report";
  code: string;
  priority: Priority;
  statusBadge?: "Officer Assigned" | "—";
  description: string;
  area: string;
  location: string;
  minutesAgo: number;
}

export interface SystemFlag {
  label: string;
  value: "Online" | "Active" | "Connected" | "Offline";
}


export type OfficerStatus = "Available" | "Busy" | "en-Route" | "Offline";

export interface Officer {
  id: string;
  name: string;
  unit: string;     // Alpha-1, BETA-1, etc
  area: string;     // Colombo 07, etc
  status: OfficerStatus;
}

export interface AnalyticsKPI {
  id: string;
  label: string;
  value: number | string;
  changePct?: number; // e.g., +12%
  sparkline?: number[]; // for mini trend
}
