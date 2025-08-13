// src/app/page.tsx
import Navbar from "@/components/Navbar";
import KPICard from "@/components/KPICard";
import IncidentCard from "@/components/IncidentCard";
import QuickActions from "@/components/QuickActions";
import SystemStatus from "@/components/SystemStatus";
import SectionTabs, { TabKey } from "@/components/SectionTabs";
import OfficerStatusGrid from "@/components/OfficerStatusGrid";
import { mockKPIs, mockIncidents, systemStatus, mockOfficers } from "@/lib/mock";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ tab?: string }>;
}) {
  const { tab: rawTab } = await searchParams; 
  const tab = (rawTab as TabKey) ?? "live";

  return (
    <main>
      <Navbar />

      <div className="mx-auto max-w-7xl px-4">
        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {mockKPIs.map((k) => (
            <KPICard key={k.label} {...k} />
          ))}
        </div>

        {/* Tabs */}
        <SectionTabs active={tab} />

        {/* Content */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2 space-y-4">
            {tab === "live" && (
              <>
                <div className="text-sm font-semibold">Active Incidents</div>
                {mockIncidents.map((inc) => (
                  <IncidentCard key={inc.id} {...inc} />
                ))}
              </>
            )}

            {tab === "officers" && (
              <>
                <div className="text-sm font-semibold">Officer Status</div>
                <OfficerStatusGrid officers={mockOfficers} />
              </>
            )}

            {tab === "analytics" && (
              <div className="text-sm text-slate-500">Analytics coming soon…</div>
            )}
          </div>

          <div className="space-y-5">
            <QuickActions />
            <SystemStatus flags={systemStatus} />
          </div>
        </div>
      </div>
    </main>
  );
}
