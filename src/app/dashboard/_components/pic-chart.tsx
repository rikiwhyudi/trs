"use client"; // Pastikan ini ada di baris paling atas

import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Doughnut } from "react-chartjs-2";
// --- AKHIR REGISTRASI ---

import { createDoughnutChartOptions } from "../_lib/dougnatchart-option"; // Pastikan path ini benar

// --- Data Statis yang Anda Berikan ---
const labels = ["Tim Internal", "Tim L2", "Developer", "Tim L1"];
const dataValues = [7, 3, 1, 4]; // Mengubah nama variabel agar tidak bentrok dengan prop 'data' di ChartJS

// Menghitung total dari data
const totalActivePending = dataValues.reduce((sum, value) => sum + value, 0);

const chartData = {
  labels: labels.map((label, i) => `${label}`), // (${dataValues[i]})
  datasets: [
    {
      label: "Jumlah Tiket",
      data: dataValues,
      backgroundColor: ["#facc15", "#6366f1", "#a855f7", "#f87171", "#80D8C3"],
      borderColor: 'transparent', // Border antar segmen, sesuaikan dengan warna background card
      borderWidth: 0, // Border antar segmen
      hoverOffset: 8, // Efek sedikit bergeser saat hover
    },
  ],
};

// --- Komponen React yang Diekspor ---
export default function DoughnutChartPIC() {
  return (
    <Card className="flex flex-col bg-card text-card-foreground rounded-xl p-6 shadow-sm" style={{ height: `300px` }}>
        <div style={{ position: "relative", flexGrow: 1, minHeight: "0px" }}>
          <Doughnut
            data={chartData}
            options={createDoughnutChartOptions("Distribusi PIC Tiket (Aktif/Pending)")}
          />
        </div>
    </Card>
  );
}