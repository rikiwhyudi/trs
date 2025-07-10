"use client";

import * as React from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Card } from "@/components/ui/card";
import DoughnutChartPIC from "./pic-chart";
import { registerChartBase } from "@/lib/chart-register";
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <VerticalBarChartStatus />

      <DoughnutChartPIC />

      <VerticalBarChartRegional />

      <PieChartOnCheck />

    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
      <LocationBarChartHorizontal />
      <CategoriesBarChartHorizontal />
      <ResolvedBarChartHorizontal />
    </div>
    </>
  );
}
