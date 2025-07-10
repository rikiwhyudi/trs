import { Card } from "@/components/ui/card";
import { Pie } from "react-chartjs-2";
import { createPieChartOptions } from "../_lib/piechart-option";




// --- Data Statis yang Anda Berikan ---
const labels = ["RW", "SYM", "DRS", "LNG"];
const dataValues = [53, 43, 41, 64]; // Mengubah nama variabel agar tidak bentrok dengan prop 'data' di ChartJS

// Menghitung total dari data
const totalActivePending = dataValues.reduce((sum, value) => sum + value, 0);

const chartData = {
  labels: labels.map((label, i) => `${label}`), // (${dataValues[i]})
  datasets: [
    {
      label: "Jumlah Tiket",
      data: dataValues,
      backgroundColor: ["#03A6A1", "#FFE3BB", "#FFA673", "#FF4F0F", "#687FE5"],
      borderColor: 'transparent', // Border antar segmen, sesuaikan dengan warna background card
      borderWidth: 0, // Border antar segmen
      hoverOffset: 8, // Efek sedikit bergeser saat hover
    },
  ],
};


export default function PieChartOnCheck() {
  return (
    <Card className="flex flex-col bg-card text-card-foreground rounded-xl p-6 shadow-sm" style={{ height: `300px` }}>
        <div style={{ position: "relative", flexGrow: 1, minHeight: "0px" }}>
          <Pie
            data={chartData}
            options={createPieChartOptions("Distribusi OnCheck Tiket (Aktif/Pending)")}
          />
        </div>
    </Card>
  );
}