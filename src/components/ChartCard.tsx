import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { History } from "../types";
import { InfoIcon } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartCardProps {
  history: History[];
}

const ChartCard: React.FC<ChartCardProps> = ({ history }) => {
  // Prepare chartJS data
  const data = {
    labels: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    datasets: [
      {
        data: history.map((h) => h.score),
        borderColor: "#09a6e0",
        backgroundColor: "rgba(9,166,224,0.12)",
        fill: true,
        tension: 0.38,
        pointBackgroundColor: "#fff",
        pointBorderColor: (context: any) =>
          context.dataset.data[context.dataIndex] ===
          Math.max(...context.dataset.data)
            ? "#ffd600"
            : "#09a6e0",
        pointRadius: (context: any) =>
          context.dataset.data[context.dataIndex] ===
          Math.max(...context.dataset.data)
            ? 10
            : 6,
        pointBorderWidth: 3,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: {
          color: "#e4eaf0",
          drawBorder: true,
          borderColor: "#0593dc",
          borderWidth: 2,
        },
        ticks: {
          color: "#BFBFBF",
          font: { size: 16, weight: "normal" as const }, // <- use this for strict TypeScript
          padding: 10,
        },
        offset: false,
      },
      y: {
        grid: {
          color: "#e4eaf0",
          drawBorder: true,
          borderColor: "#0593dc",
          borderWidth: 2,
        },
        min: 300,
        max: 900,
        ticks: {
          color: "#BFBFBF",
          font: { size: 16, weight: "bold" as const },
          stepSize: 100,
          padding: 10,
        },
      },
    },
    layout: {
      padding: 0,
    },
    elements: { line: { borderWidth: 4 } },
  };

  return (
    <section>
      <CardHeaderComponent />

      <div className="bg-[#F7F9FA] rounded-xl p-6 border border-[#e6f0f5] shadow-sm flex flex-col md:flex-col md:items-start relative">
        <div className="flex-grow">
          <div className="p-0 m-0">
            <span className="block text-sm text-gray-500 mb-5">
              Trended view of the changes in your NB Score with every refresh.
            </span>
            <Line data={data} options={options} width={600} height={250} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartCard;

const CardHeaderComponent = () => {
  return (
    <div className="!mb-6 md:mb-0 md:mr-6">
      <div className="flex items-center mb-1">
        <h2 className="text-[#0074b9] font-semibold text-base mr-2">
          NB SCORE HISTORY
        </h2>
        <span className="ml-2 flex-shrink-0 relative group">
          <InfoIcon size={16} className="text-[#046899]" />
        </span>
      </div>
    </div>
  );
};
