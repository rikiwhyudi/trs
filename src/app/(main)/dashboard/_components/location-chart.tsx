"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Bar } from "react-chartjs-2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createHorizontalBarChartOptions } from "../_lib/horizontalbarchart-option";
import React from "react";

// Fungsi pembuat data dummy
const generateChartData = (chartIndex: number) => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    name: `Location ${chartIndex}-${i + 1}`,
    value: Math.floor(Math.random() * 10) + 1,
  })).sort((a, b) => b.value - a.value);

  const maxValue = Math.max(...data.map((item) => item.value));

  return {
    chartData: data,
    maxValue,
  };
};

const createChartJsData = (data: { name: string; value: number }[]) => ({
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "Jumlah Tiket",
      data: data.map((item) => item.value),
      backgroundColor: "oklch(0.6 0.118 184.704)",
      borderRadius: 4,
      borderWidth: 0, // Border antar segmen
      hoverOffset: 8, // Efek sedikit bergeser saat hover
      // barThickness: 35,
      // maxBarThickness: 20,
      // minBarLength: 1,
    },
  ],
});

export default function LocationBarChartHorizontal() {
  // Hanya buat satu set data
  const { chartData, maxValue } = generateChartData(1); // Gunakan chartIndex 1
  const chartJsData = createChartJsData(chartData);
  const chartJsOptions = createHorizontalBarChartOptions(
    maxValue,
    "Lokasi Tiket Terbanyak"
  ); // Judul default atau dinamis

  // Menghitung tinggi Chart.js agar sesuai dengan jumlah data
  const chartHeight = chartData.length * 30; // Estimasi 28px per bar + padding

  return (
    // Hanya satu Card, tanpa grid pembungkus jika ini adalah komponen tunggal
    // Jika komponen ini akan ditempatkan dalam grid lain, hapus div grid ini.
    <Card className="flex flex-col bg-card text-card-foreground rounded-xl p-6 shadow-sm h-[300px]">
      <ScrollArea className="w-full h-[250px]">
        {" "}
        {/* Tinggi ScrollArea yang lebih realistis */}
        <CardContent>
          {/* ScrollArea akan membungkus chart */}
          <div
            style={{
              width: "100%",
              height: chartHeight, // Tinggi dinamis berdasarkan data
              position: "relative",
            }}
          >
            <Bar data={chartJsData} options={chartJsOptions} />
          </div>
        </CardContent>
        <ScrollBar orientation="vertical" />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}
