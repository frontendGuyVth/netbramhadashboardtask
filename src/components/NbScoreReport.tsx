import { DetailReportIcon } from "../assets/Icons/DetailReportIcon";
import { GaugeIcon } from "../assets/Icons/GaugeIcon";

const NbScoreReport: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-8 w-full rounded-xl">
      <NbReportComponent />
      <DescriptionReportComponent />
    </div>
  );
};

export default NbScoreReport;

const NbReportComponent = () => {
  return (
    <section className="flex-grow flex bg-white justify-between items-start rounded-xl p-5 bg-blue">
      <div className="flex-1 text-[16px]">
        <h2 className="text-[18px] font-bold text-[#046899] mb-2">NB REPORT</h2>
        <p className="text-[#262626] w-[310px] mb-4">
          Get your personalized NB Report to plan your financial future.
        </p>

        <a
          href="/view-report"
          className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium mb-2"
        >
          <span className="mr-2 text-lg">👁️</span>
          View Your NB Report
          <span className="ml-1 text-lg font-semibold">&gt;</span>
        </a>
        <a
          href="/download-report"
          className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          <span className="mr-2 text-lg">📄</span>
          Download Your NB Report With Summary
          <span className="ml-1 text-lg font-semibold">&gt;</span>
        </a>
      </div>
      <div className="w-20 h-20 flex-shrink-0">
        <DetailReportIcon />
      </div>
    </section>
  );
};

const DescriptionReportComponent = () => {
  return (
    <section className="flex justify-between items-center p-5 bg-[#FEEF93] rounded-xl">
      <div className="flex-auto pr-4">
        <p className="text-[#262626] text-[16px] leading-relaxed">
          You currently have an active subscription. You will be able to access
          Free Annual NB Score & Report after the subscription period expires.
        </p>
      </div>

      <div className="flex-1 flex justify-end">
        <GaugeIcon />
      </div>
    </section>
  );
};
