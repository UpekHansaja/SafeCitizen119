"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SystemFlag } from "@/lib/types";

export default function SystemStatus({ flags }: { flags: SystemFlag[] }) {
  return (
    <Card className="card-like">
      <CardContent className="p-5">
        <div className="font-semibold mb-4">Quick Actions</div>
        <div className="space-y-4">
          {flags.map((f) => (
            <div key={f.label} className="flex items-center justify-between">
              <div className="text-sm">{f.label}</div>
              <Badge
                className="rounded-full px-3"
                style={{
                  backgroundColor: "var(--brand-green)",
                  color: "white",
                }}
              >
                {f.value}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
