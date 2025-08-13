"use client";
import OfficerCard from "./OfficerCard";
import { Officer } from "@/lib/types";

export default function OfficerStatusGrid({ officers }: { officers: Officer[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {officers.map((o) => (
        <OfficerCard key={o.id} {...o} />
      ))}
    </div>
  );
}
