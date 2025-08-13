"use client";
import { Badge } from "@/components/ui/badge";
import { OfficerStatus } from "@/lib/types";
import { cn } from "@/lib/ui";

const styles: Record<OfficerStatus, string> = {
  "Available": "bg-emerald-500 text-white",
  "Busy": "bg-amber-400 text-white",
  "en-Route": "bg-blue-600 text-white",
  "Offline": "bg-slate-300 text-slate-700",
};

export default function OfficerBadge({ status }: { status: OfficerStatus }) {
  return (
    <Badge className={cn("rounded-full px-3", styles[status])}>{status}</Badge>
  );
}
