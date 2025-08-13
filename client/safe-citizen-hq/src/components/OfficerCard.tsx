"use client";
import { Card, CardContent } from "@/components/ui/card";
import OfficerBadge from "./OfficerBadge";
import { Officer } from "@/lib/types";

export default function OfficerCard({ name, unit, area, status }: Officer) {
  return (
    <Card className="card-like border border-slate-200">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-semibold">{name}</div>
            <div className="text-xs text-slate-600">{unit}</div>
            <div className="text-xs text-slate-500">{area}</div>
          </div>
          <OfficerBadge status={status} />
        </div>
      </CardContent>
    </Card>
  );
}
