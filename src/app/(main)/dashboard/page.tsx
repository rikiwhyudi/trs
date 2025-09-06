import { DashboardSummaryCards } from "@/app/(main)/dashboard/_components/card-section";
import {
  getDashboardData,
  getTicketStatusSummary,
  getTicketTrendsData,
} from "@/app/(main)/dashboard/_lib/dashboard-data";

import { DashboardChartSection } from "./_components/chart-section";
import React from "react";

export default async function DashboardPage() {
  const dashboardData = await getDashboardData();
  const ticketTrendsData = await getTicketTrendsData();
  const statustiket = await getTicketStatusSummary();

  return (
    <main className="flex-1 p-4">
      <DashboardSummaryCards
        totalTickets={dashboardData.totalTickets}
        resolvedTickets={dashboardData.resolvedTickets}
        closedTickets={dashboardData.closedTickets}
        activeTickets={dashboardData.activeTickets}
        pendingTickets={dashboardData.pendingTickets}
      />

      <div className="mt-4">
        <DashboardChartSection />
      </div>
    </main>
  );
}
