import { ChartOptions, plugins } from "chart.js"


export function createVerticalBarChartOptions(title: string): ChartOptions<"bar"> {
    return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        // align: "center" as const,
        padding: { top: 0, bottom: 20 },
      },
      legend: {
        display: false,
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        title: { display: false, text: "Agen" },
              grid: { display: true, color: "rgba(200,200,200,0.2)" },
      },
      y: {
        min: 0,
        title: { display: false, text: "Jumlah Tiket" },
        grid: { display: true, color: "rgba(200,200,200,0.2)" },
      },
    },
    }
  };