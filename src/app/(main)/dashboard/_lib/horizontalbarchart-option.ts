import { ChartOptions } from "chart.js";

export const createHorizontalBarChartOptions = (maxValue: number, title : string): ChartOptions<"bar"> => ({
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    title: {
      display: true,
      text: title,
      padding: { top: 10, bottom: 20 },
    },
    // datalabels: {
    //   anchor: "end",
    //   align: "right",
    //   formatter: (value: number) => value,
    // },
  },
  scales: {
    x: {
      type: "linear",
      display: false,
      grid: { display: false },
      ticks: { display: false },
      max: Math.ceil(maxValue * 1.15),
    },
    y: {
      type: "category",
      display: true,
      grid: { display: false },
      ticks: {
        display: true,
        autoSkip: false,

      },
    },
  },
});