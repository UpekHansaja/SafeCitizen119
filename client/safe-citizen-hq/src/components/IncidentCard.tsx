"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock3 } from "lucide-react";
import { Incident } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/ui";
import { IconFromPublic } from "@/components/IconFromPublic";

export default function IncidentCard(props: Incident) {
  const isUrgent = props.priority === "URGENT";

  return (
    <Card
      className={cn(
        "card-like border",
        isUrgent ? "border-[var(--brand-red)]" : "border-slate-200"
      )}
    >
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="h-8 w-8 rounded-full grid place-items-center"
              style={{ color: isUrgent ? "var(--brand-red)" : "#0f172a" }}
            >
              
              <IconFromPublic
                src="/icons/crime.svg"
                className="h-8 w-8"
                title="Crime"
              />
            </div>

            <div>
              <div className="font-semibold">{props.type}</div>
              <div className="subtle text-xs">{props.code}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isUrgent && (
              <Badge
                variant="secondary"
                className="bg-[var(--brand-red)] text-white hover:bg-[var(--brand-red)]"
              >
                URGENT
              </Badge>
            )}

            {props.statusBadge && (
              <Badge
                variant="secondary"
                className="bg-[var(--brand-blue)] text-white hover:bg-[var(--brand-blue)]"
              >
                {props.statusBadge}
              </Badge>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm text-slate-700">{props.description}</p>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-slate-500" />
            <span>{props.area}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock3 className="h-4 w-4 text-slate-500" />
            <span>{props.minutesAgo} minutes ago</span>
          </div>
        </div>

        <div className="mt-4">
          <Button
            className="bg-[var(--brand-blue)] text-white hover:bg-blue-700"
            onClick={() => {
              // TODO: hook up to assignment dialog
            }}
          >
            Assign Officer
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
