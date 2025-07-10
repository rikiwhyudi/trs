import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  BarElement,
  LineElement,
  ArcElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

let registered = false;

export function registerChartBase() {
  if (registered) return; // ✅ Hindari registrasi ulang

  ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    RadialLinearScale,
    BarElement,
    LineElement,
    ArcElement,
    PointElement,
    Filler,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
  );

  registered = true;
}
