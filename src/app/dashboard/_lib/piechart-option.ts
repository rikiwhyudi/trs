import { ChartOptions } from "chart.js";

export function createPieChartOptions(title: string): ChartOptions<"pie"> {
  return {
    // Menggunakan any untuk menghindari masalah tipe
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        align: "center" as const,
      },
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          font: { size: 12 },
          boxWidth: 7,
          boxHeight: 7,
          padding: 10,
        },
      },
    },
  };
}