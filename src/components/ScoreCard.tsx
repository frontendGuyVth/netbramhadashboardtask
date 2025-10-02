import GaugeChart from "react-gauge-chart";
import { NeedleComponent } from "../assets/Icons/NeedleIcon";

interface ScoreCardProps {
  name: string;
  score: number;
  date: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ name, score, date }) => {
  return (
    <section className="rounded-xl bg-white">
      <div className="p-6 flex flex-col justify-center items-center w-full">
        <h3 className="text-[24px] text-[#262626] font-bold mb-2">
          Hello, {name}
        </h3>
        <div className="relative w-[300px] mt-4">
          <GaugeComponent />
          <div className="absolute left-12 bottom-[-10px] transform -translate-x-1/2 text-sm font-medium text-[#BFBFBF]">
            300
          </div>

          {/* 900 Label (End) */}
          <div className="absolute right-12 bottom-[-10px] transform translate-x-1/2 text-sm font-medium text-[#BFBFBF]">
            900
          </div>
        </div>

        <div className="text-[40px] font-bold mt-4 text-[#262626]">{score}</div>
        <p className="mt-2 text-[18px] mb-[14px] text-[#262626]">
          is your <span className="text-[#00A6CA]">NB</span> Score as of {date}
        </p>
      </div>
      <ButtonSection />
    </section>
  );
};

export default ScoreCard;

const GaugeComponent = () => {
  return (
    <GaugeChart
      id="nb-score-gauge"
      nrOfLevels={5}
      colors={["#E15825", "#F18200", "#FCD800", "#A9D161", "#009900"]}
      arcWidth={0.15}
      textColor="#222"
      needleColor="#222"
      needleBaseColor="#888"
      style={{ width: "300px" }}
      arcPadding={0.02}
      cornerRadius={1}
      arcsLength={[0.8, 0.2, 0.2, 0.2, 0.2]}
      animate={false}
      needleScale={0.7}
      customNeedleComponent={<NeedleComponent />}
      customNeedleComponentClassName="needle"
    />
  );
};
const ButtonSection = () => {
  return (
    <section className="w-full h-[80px] #1F5A8533 bg-white flex flex-row justify-evenly items-center shadow-[0_0_48px_0_#1F5A8533] rounded-b-xl">
      <a href="#" className="text-[#066A9B] underline">
        Score Analysis
      </a>
      <button className="w-[240px] h-[50px] bg-[#FDDC02] rounded-[40px] text-[#000] font-medium">
        Refresh Now
      </button>
    </section>
  );
};


