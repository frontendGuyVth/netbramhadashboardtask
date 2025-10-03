import { InfoIcon } from "lucide-react";

interface ProgressCardProps {
  score: number;
}

const ranges = [
  { label: "300–722", color: "bg-[#E15825]", percentage: 15, min: 300, max: 722 },
  {
    label: "723–747",
    color: "bg-[#F18200]",
    percentage: 22,
    min: 723,
    max: 747,
  },
  {
    label: "748–764",
    color: "bg-[#FCD800]",
    percentage: 26,
    min: 748,
    max: 764,
  },
  {
    label: "765–777",
    color: "bg-[#A9D161]",
    percentage: 18,
    min: 765,
    max: 777,
  },
  {
    label: "778–900",
    color: "bg-[#009900]",
    percentage: 20,
    min: 778,
    max: 900,
  },
];

const getScoreIndex = (score: number) => {
  return ranges.findIndex((range) => score >= range.min && score <= range.max);
};

const ProgressCard: React.FC<ProgressCardProps> = ({ score }) => {
  const scoreIndex = getScoreIndex(score);

  return (
    <div className="bg-[white] shadow rounded-xl p-6">
      <HeaderSegment />
      <section className="bg-[#F7F9FA] p-6">
        <div className="bg-white p-6">
          <div className="flex w-full h-[60px] gap-x-1 rounded-lg">
            {ranges.map((range, idx) => (
              <div
                key={range.label}
                style={{ width: `${range.percentage}%` }}
                className={`${
                  range.color
                } text-white flex flex-col pl-4 items-start justify-center py-2 relative ${
                  idx === 0
                    ? "rounded-tl-xl rounded-bl-xl"
                    : idx === ranges.length - 1
                    ? "rounded-tr-xl rounded-br-xl"
                    : ""
                }`}
              >
                <span className="text-[18px] text-left font-bold">{range.percentage}%</span>
              </div>
            ))}
          </div>
          <div className="flex w-full mt-1">
            {ranges.map((range, idx) => (
              <div
                key={range.label + "_label"}
                style={{ width: `${range.percentage}%` }}
                className="flex justify-center"
              ></div>
            ))}
          </div>
          <div className="text-center mt-4">
            <p className="text-4xl font-bold text-[#262626]">{score}</p>
            <hr />
            <ScoreRangeSegment />
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-[16px] text-[#262626] mt-2">
            Your NB Score lies in the top 70% in all of India.
          </p>
          <p className="text-[14px] text-[#262626]">Based on the NB Data</p>
        </div>
      </section>
    </div>
  );
};

export default ProgressCard;

const HeaderSegment = () => {
  return (
    <header className="flex items-center justify-start gap-2 mb-4">
      <h3 className="text-[18px] text-[#046899] font-bold">
        Where You Stand
      </h3>
      <InfoIcon size={16} className="text-[#046899]" />
    </header>
  );
};

const ScoreRangeSegment = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      <span className="text-[14px] text-[#262626]">Score Range</span>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#E15825] inline-block" />
        <span className="text-[14px] text-[#262626] font-bold mr-2">300–722</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#F18200] inline-block" />
        <span className="text-[14px] text-[#262626] font-bold mr-2">723–747</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#FCD800] inline-block" />
        <span className="text-[14px] text-[#262626] font-bold mr-2">748–764</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#A9D161] inline-block" />
        <span className="text-[14px] text-[#262626] font-bold mr-2">765–777</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-[#009900] inline-block" />
        <span className="text-[14px] text-[#262626] font-bold">778–900</span>
      </div>
    </div>
  );
};
