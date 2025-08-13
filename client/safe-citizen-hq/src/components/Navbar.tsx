"use client";
import { cn } from "@/lib/ui";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center gap-4">
        <div className="h-12 w-12 rounded-xl bg-slate-900/90 flex items-center justify-center text-white">
          {/* Placeholder logo box */}
          <span className="font-bold">SC</span>
        </div>
        <div>
          <div className="text-lg font-semibold">SafeCitizen 119 HQ</div>
          <div className="text-sm subtle">Central Command Dashboard</div>
        </div>
      </div>
    </header>
  );
}
