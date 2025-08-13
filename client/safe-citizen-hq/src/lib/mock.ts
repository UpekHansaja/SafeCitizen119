import { Incident, KPI, SystemFlag } from "./types";

export const mockKPIs: KPI[] = [
  { label: "Active Incidents", value: 24, icon: "alert" },
  { label: "Available Officers", value: 24, icon: "users" },
  { label: "Avg Response time", value: 24, icon: "clock" },
  { label: "Resolved Today", value: 24, icon: "trend" },
];

export const mockIncidents: Incident[] = [
  {
    id: "INC-006",
    type: "Crime Report",
    code: "#INC-006",
    priority: "URGENT",
    description:
      "Armed robbery in progress at jewelry store. Multiple suspects reported.",
    area: "Pettah Market Area",
    location: "📍",
    minutesAgo: 2,
  },
  {
    id: "INC-007",
    type: "Accident Report",
    code: "#INC-007",
    priority: "MEDIUM",
    statusBadge: "Officer Assigned",
    description:
      "Multi-vehicle accident blocking main highway. Traffic heavily affected.",
    area: "Southern Expressway KM 15",
    location: "📍",
    minutesAgo: 2,
  },
];

export const systemStatus: SystemFlag[] = [
  { label: "Communication", value: "Online" },
  { label: "GSP Tracking", value: "Active" },
  { label: "Database", value: "Connected" },
];

import { Officer, OfficerStatus, AnalyticsKPI } from "./types";

export const mockOfficers: Officer[] = [
  { id: "o1", name: "Officer Silva",     unit: "Alpha-1", area: "Colombo 07", status: "Available" },
  { id: "o2", name: "Officer Perera",    unit: "Alpha-2", area: "Colombo 07", status: "Busy" },
  { id: "o3", name: "Officer Bandara",   unit: "Alpha-1", area: "Colombo 02", status: "en-Route" },
  { id: "o4", name: "Officer Jayasinghe",unit: "BETA-1",  area: "Colombo 07", status: "Available" },
  { id: "o5", name: "Officer Fernando",  unit: "BETA-2",  area: "Colombo 05", status: "Available" },
  { id: "o6", name: "Officer Wijerathne",unit: "ALPHA-3", area: "Colombo 06", status: "Offline" },
];

export const mockAnalytics: AnalyticsKPI[] = [
  { id: "a1", label: "Incidents Today", value: 24, changePct: +8, sparkline: [6,9,7,10,12,11,14] },
  { id: "a2", label: "Avg Response (min)", value: 24, changePct: -5, sparkline: [28,26,27,25,24,24,23] },
  { id: "a3", label: "Resolved Today", value: 24, changePct: +12, sparkline: [3,5,6,7,9,10,12] },
  { id: "a4", label: "Open Cases", value: 24, changePct: -3, sparkline: [20,18,19,17,16,15,14] },
];