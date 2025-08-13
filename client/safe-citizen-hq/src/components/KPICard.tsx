"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { KPI } from "@/lib/types";

function Icon({ kind }: { kind: KPI["icon"] }) {
  // Map icon keys to file paths in /public/icons
  const map: Record<KPI["icon"], string> = {
    alert: "/icons/alert.svg",
    users: "/icons/people.svg",
    clock: "/icons/clock.svg",
    trend: "/icons/trend.svg",
  };

  const src = map[kind];
  return (
    <Image
      src={src}
      alt={`${kind} icon`}
      width={20}
      height={20}
      className="h-10 w-10"
    />
  );
}

export default function KPICard({ label, value, icon }: KPI) {
  return (
    <Card className="card-like">
      <CardContent className="p-5 flex items-center gap-4">
        <div
          className="h-9 w-9 rounded-full grid place-items-center"
          style={{ backgroundColor: "white", color: "white" }}
        >
          <Icon kind={icon} />
        </div>
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          <div className="subtle text-sm">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
}
