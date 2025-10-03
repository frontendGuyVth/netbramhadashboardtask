import { ArrowDownLeft, ArrowRight, ArrowUpRight } from "lucide-react";

export const ScoreLegendComponent = () => {
  const legendData = [
    { score: 493, date: "18/08/2022", type: "up" },
    { score: 490, date: "16/08/2022", type: "down" },
    { score: 510, date: "14/08/2022", type: "up" },
    { score: 509, date: "12/08/2022", type: "steady" },
    { score: "N/H", date: "09/08/2022", type: "none" },
  ];

  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-sm">
      <div className="font-semibold text-gray-700 mb-3">August 2022</div>
      {legendData.map((entry, idx) => (
        <div
          key={idx}
          className="flex items-center text-sm py-1 border-b last:border-b-0 border-gray-200"
        >
          <span className="w-6 flex justify-center items-center mr-2">
            {entry.type === "up" && (
              <ArrowUpRight size={18} className="text-green-500" />
            )}
            {entry.type === "down" && (
              <ArrowDownLeft size={18} className="text-red-500" />
            )}
            {entry.type === "steady" && (
              <ArrowRight size={18} className="text-blue-500" />
            )}
            {entry.type === "none" && (
              <span className="text-gray-400 font-semibold">N/H</span>
            )}
          </span>
          <span
            className={`w-12 font-bold ${
              entry.type === "none" ? "text-gray-400" : "text-gray-800"
            }`}
          >
            {entry.score}
          </span>
          <span className="ml-auto text-gray-500">{entry.date}</span>
        </div>
      ))}
    </div>
  );
};
