// src/components/SectionTabs.tsx
import Link from "next/link";

export type TabKey = "live" | "officers" | "analytics";

export default function SectionTabs({ active }: { active: TabKey }) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "live", label: "Live Incident" },
    { key: "officers", label: "Officer Status" },
    { key: "analytics", label: "Analytics" },
  ];

  return (
    <div className="mt-6 flex items-center gap-3">
      {tabs.map((t) => {
        const isActive = t.key === active;
        return (
          <Link
            key={t.key}
            href={`/?tab=${t.key}`}
            className={
              isActive
                ? "px-3 py-2 rounded-full bg-slate-900 text-white text-sm"
                : "px-3 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm"
            }
            aria-current={isActive ? "page" : undefined}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}
