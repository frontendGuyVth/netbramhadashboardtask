import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { DashboardData } from "../types";
import ScoreCard from "../components/ScoreCard";
import NbScoreReport from "../components/NbScoreReport";
import AccountsCard from "../components/AccountsCard";
import AccountProgressCard from "../components/AccountProgressCard";
import { AlertTriangle, FileSearch } from "lucide-react";
import ChartCard from "../components/ChartCard";
import ProgressCard from "../components/ProgressCard";
import { ScoreLegendComponent } from "../components/ScoreLegendComponent";
import { FooterComponent } from "../components/Footer";

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((res: DashboardData) => setData(res));
  }, []);

  if (!data) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 !bg-[#F7F9FA] min-h-screen">
        <Header />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-[40px] mx-[48px]">
          <ScoreCard
            name={data.user.name}
            score={data.user.score}
            date={data.user.date}
          />
          <NbScoreReport />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mt-[40px] pt-[40px] px-[48px] bg-white">
          <div className="md:col-span-6">
            <AccountsCard accounts={data.accounts} />
          </div>
          <div className="md:col-span-4">
            <AccountMultipleInfoCardsComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 items-center md:grid-cols-10 gap-6 bg-white pt-[40px] px-[48px] ">
          <div className="md:col-span-7">
            <ChartCard history={data.history} />
          </div>
          <div className="md:col-span-3">
            <ScoreLegendComponent />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-6 pt-[40px] px-[48px] bg-white border-none pb-[120px]">
          <ProgressCard score={data.user.score} />
        </div>
        <hr />
        <footer className="bg-white h-[100px]">
          <FooterComponent />
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;

const AccountMultipleInfoCardsComponent = () => {
  return (
    <div className="space-y-4">
      <AccountProgressCard
        icon={<AlertTriangle size={24} />}
        title="Total Disputes"
        value="12"
        description="Learn more about credit reporting and related policies."
        linkText="Read More"
        linkHref="#"
      />
      <AccountProgressCard
        icon={<FileSearch size={24} />}
        title="Total Enquiries"
        value="05"
        description="(In last 3 years)"
      />
    </div>
  );
};
