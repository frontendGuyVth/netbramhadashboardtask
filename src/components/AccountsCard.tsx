import { InfoIcon } from "lucide-react";
import { Accounts, ChartItem } from "../types";
import { useState } from "react";

const ACCOUNT_COLORS = ["#7E79DD", "#FDE866", "#99DBEA", "#67D995"];

interface AccountsCardProps {
  accounts: Accounts;
}

const AccountsCard: React.FC<AccountsCardProps> = ({ accounts }) => {
  const chartData: ChartItem[] = [
    {
      label: "Closed credit cards",
      value: accounts.closedCards,
      color: ACCOUNT_COLORS[0],
    },
    {
      label: "Closed loans",
      value: accounts.closedLoans,
      color: ACCOUNT_COLORS[1],
    },
    {
      label: "Open credit cards",
      value: accounts.openCards,
      color: ACCOUNT_COLORS[2],
    },
    {
      label: "Open loans",
      value: accounts.openLoans,
      color: ACCOUNT_COLORS[3],
    },
  ];

  return (
    <div className="bg-white border-t-[2px] border-[#00A6CA] h-inherit shadow rounded-xl p-6">
      <AccountsHeaderSectionComponent />
      <div className="flex justify-start gap-x-8 w-full items-center">
        <div className="flex items-center justify-center">
          <DonutChart data={chartData} total={accounts.total} />
        </div>
        <AccountDetailsReportComponent chartData={chartData} />
      </div>
    </div>
  );
};

export default AccountsCard;

// account details report component
const AccountDetailsReportComponent = ({
  chartData,
}: {
  chartData: ChartItem[];
}) => {
  return (
    <div className="w-full pl-4 h-auto">
      <ul className="space-y-2 my-4 w-full text-sm">
        {chartData.map((item) => (
          <li
            key={item.label}
            className="flex justify-between items-center w-full"
          >
            <div className="flex items-center">
              <span
                className="w-3 h-3 rounded-full inline-block mr-2 my-4"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-[#262626] font-[14px] font-bold">{item.label}</span>
            </div>
            <span className="text-[#262626] font-[14px] font-normal">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
// header section component
const AccountsHeaderSectionComponent = () => {
  return (
    <header className="flex items-center justify-between h-[30px] mb-4">
      <div className="flex items-center">
        <h3 className="text-[#046899] font-semibold mr-2">Your Accounts</h3>
        <InfoIcon size={16} className="text-[#046899]" />
      </div>

      <TabsControlComponent />
    </header>
  );
};

// donut chart component
const DonutChart = ({
  data,
  total,
}: {
  data: { label: string; value: number; color: string }[];
  total: number;
}) => {
  const radius = 80,
    stroke = 16,
    circumference = 2 * Math.PI * radius;
  const values = data.map((d) => d.value);
  const totalValue = values.reduce((a, b) => a + b, 0);
  let dashOffset = 0;

  return (
    <svg width={200} height={200} viewBox="0 0 200 200">
      <g transform="rotate(-90 100 100)">
        {data.map((d) => {
          const dash = (d.value / totalValue) * circumference;
          const el = (
            <circle
              key={d.label}
              cx="100"
              cy="100"
              r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash}, ${circumference - dash}`}
              strokeDashoffset={dashOffset}
            />
          );
          dashOffset -= dash;
          return el;
        })}
      </g>
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="1.2em"
        fontWeight="bold"
        fill="#222"
      >
        {total}
      </text>
      <text
        x="100"
        y="120"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="0.8em"
        fill="#555"
      >
        Total Accounts
      </text>
    </svg>
  );
};

//tab component
const TabsControlComponent = () => {
  const options = ["All", "Open", "Closed"];
  const [selected, setSelected] = useState("All");

  return (
    <div className="inline-flex w-[200px] h-[40px] bg-[#F7F9FA] rounded-[8px] p-1">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setSelected(option)}
          className={`px-[16px] py-[4px] hover:border-none focus:border-none text-[14px] font-normal rounded-[6px]
            ${
              selected === option
                ? "bg-[#066A9B] text-white w-[50px] h-[28px] focus:border-none hover:border-none"
                : "text-[#595959] bg-[#F7F9FA] focus:border-none hover:border-none "
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
