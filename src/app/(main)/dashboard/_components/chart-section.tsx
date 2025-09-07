"use client";

import * as React from "react";
import DoughnutChartPIC from "./pic-chart";
import VerticalBarChartStatus from "./status-chart";
import VerticalBarChartRegional from "./regional-chart";
import PieChartOnCheck from "./oncheck-chart";
import LocationBarChartHorizontal from "./location-chart";
import CategoriesBarChartHorizontal from "./categories-chart";
import ResolvedBarChartHorizontal from "./resolved-chart";

// --- Interface untuk Props Data Chart ---
interface DashboardChartSectionProps {
  ticketTrendsData: {
    categories: string[];
    series: {
      name: string;
      data: number[];
    }[];
  };
  ticketStatusSummary: {
    labels: string[];
    data: number[];
    backgroundColor?: string[];
  };
  agentPerformanceData?: {
    labels: string[];
    data: number[];
    backgroundColor?: string[];
  };
  ticketLocationData?: {
    labels: string[];
    data: number[];
    backgroundColor?: string[];
  };
}

export function DashboardChartSection() {

  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
      <VerticalBarChartStatus />

      <DoughnutChartPIC />

      <PieChartOnCheck />

    {/* </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"> */}
      <CategoriesBarChartHorizontal />
      <VerticalBarChartRegional />
      <ResolvedBarChartHorizontal />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mt-4">
      <LocationBarChartHorizontal />
    </div>
    </>
  );
}
