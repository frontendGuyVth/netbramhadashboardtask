import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { DashboardData } from "../types";

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
      <main className="flex-1 bg-[#F7F9FA] min-h-screen">
        <Header />
      </main>
    </div>
  );
};

export default Dashboard;
