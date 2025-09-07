import { Card, CardContent } from "@/components/ui/card"; // Tambahkan CardHeader & CardTitle jika perlu
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"; // Import dari Shadcn UI
import { Bar } from "react-chartjs-2";
import { createHorizontalBarChartOptions } from "../_lib/horizontalbarchart-option"; // Pastikan path ini benar

// --- Fungsi untuk menghasilkan data dummy ---
const generateChartData = (chartIndex: number) => {
  const data = Array.from({ length: 20 }, (_, i) => ({
    name: `Resolved ${chartIndex}-${i + 1}`,
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
      backgroundColor: "#093FB4", // Mengganti warna ke HSL (hijau) yang lebih umum
      borderRadius: 0,
      borderWidth: 0,
      hoverOffset: 8,
    },
  ],
});

export default function ResolvedBarChartHorizontal() {
  // Hanya buat satu set data
  const { chartData, maxValue } = generateChartData(1); // Gunakan chartIndex 1
  const chartJsData = createChartJsData(chartData);
  const chartJsOptions = createHorizontalBarChartOptions(
    maxValue,
    "Resolved Tiket Terbanyak"
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
