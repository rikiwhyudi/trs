import { ChartOptions } from "chart.js";

export function createDoughnutChartOptions(title: string): ChartOptions<"doughnut"> {
  return {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%", // membuatnya terlihat seperti doughnut, bukan pie
   plugins: {
      title: {
        display: true,
        text: title,
        align: "center" as const,
        padding: { top: 0, bottom: 20 },
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
