import { ChartOptions, plugins } from "chart.js"


export function createVerticalBarChartOptions(title: string): ChartOptions<"bar"> {
    return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: title,
        align: "center" as const,
      },
      legend: {
        display: false,
        position: "bottom" as const,
      },
    },
    scales: {
      x: {
        title: { display: false, text: "Agen" },
        grid: { display: false },
      },
      y: {
        min: 0,
        title: { display: false, text: "Jumlah Tiket" },
        grid: { display: true },
      },
    },
    }
  };