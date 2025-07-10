"use client";

import { Card } from "@/components/ui/card"; // Hanya import Card
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto"; // Menggunakan 'chart.js/auto' untuk pendaftaran elemen dasar

// --- REGISTRASI CHART.JS ---
// Ini sangat penting agar elemen chart seperti 'bar' dikenali.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
// --- AKHIR REGISTRASI ---

import { createVerticalBarChartOptions } from "../_lib/verticalbarchart-option";

// --- Data Statis yang Anda Berikan (Dipertahankan) ---
const labels = ["Resolved", "Pending", "Active", "Closed"];
const dataValues = [7, 3, 1, 4]; // Memperbaiki jumlah elemen agar sesuai dengan labels

// Menghitung total dari data (Dipertahankan)
const totalActivePending = dataValues.reduce((sum, value) => sum + value, 0);

// --- Fungsi createChartJsData (Dipertahankan) ---
const createChartJsData = (data: { name: string; value: number }[]) => ({
  labels: data.map((item) => item.name),
  datasets: [
    {
      label: "Jumlah Tiket",
      data: data.map((item) => item.value),
      backgroundColor: ["#72b043", "#f37324", "#057dcd", "#8ba0a4"], // Warna dari kodemu
      borderWidth: 0, // Border antar segmen
      hoverOffset: 8, // Efek sedikit bergeser saat hover
    },
  ],
});

// --- Data yang akan digunakan Chart (Diperbaiki) ---
// Kita akan menggunakan data statis labels dan dataValues untuk membuat data chart.
const chartDataForBar = createChartJsData(
    labels.map((label, index) => ({ name: label, value: dataValues[index] }))
);


// --- Komponen React yang Diekspor ---
export default function VerticalBarChartStatus() {
  return (
    <Card className="flex flex-col bg-card text-card-foreground rounded-xl p-6 shadow-sm" style={{ height: `300px` }}>
      {/* Jika kamu ingin CardHeader, CardTitle, dll, kamu perlu menambahkannya secara manual di sini */}
      <div style={{ position: "relative", flexGrow: 1, minHeight: "0px" }}>
        <Bar
          data={chartDataForBar} // data={} diganti dengan data yang sudah dibuat
          options={createVerticalBarChartOptions("Distribusi Status Tiket")}
        />
      </div>
      {/* Jika kamu ingin CardFooter, kamu perlu menambahkannya secara manual di sini */}
    </Card>
  );
}