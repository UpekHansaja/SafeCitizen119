"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Radio, Shield, FileText } from "lucide-react";

export default function QuickActions() {
  return (
    <Card className="card-like">
      <CardContent className="p-5">
        <div className="font-semibold mb-4">Quick Actions</div>
        <div className="space-y-3">
          <Button
            className="w-full h-11 text-white  hover:bg-red-700"
            style={{ backgroundColor: "var(--brand-red)" }}
            onClick={() => {
              // POST /api/notifications/broadcast  (Notification Service)
              // await fetch('/api/notifications/broadcast', { method:'POST', body: JSON.stringify({ ... }) })
            }}
          >
            <Radio className="mr-2 h-5 w-5" />
            Emergency Broadcast
          </Button>

          <Button
            className="w-full h-11 text-white bg-[var(--brand-blue)] hover:bg-blue-700"
            onClick={() => {
              // POST /api/dispatch/assign (Dispatch Service) with special unit flag
            }}
          >
            <Shield className="mr-2 h-5 w-5" />
            Deploy Special Unit
          </Button>

          <Button
            variant="secondary"
            className="w-full h-11 "
            onClick={() => {
              // GET /api/analytics/performance (Analytics Service) then build report
            }}
          >
            <FileText className="mr-2 h-5 w-5" />
            Generate Report
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
