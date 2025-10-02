import {
  Home,
  BarChart2,
  FileText,
  Bell,
  BookOpen,
  ArrowUpCircle,
  Gift,
} from "lucide-react";
import { useState } from "react";

// Sidebar static menu items data
const menuItems = [
  {
    name: "Overview",
    icon: <Home size={18} />,
    children: [
      { name: "Score & Report" },
      { name: "Summary", isBold: true },
      { name: "History" },
      { name: "Where You Stand" },
    ],
  },
  { name: "Your Report", icon: <FileText size={18} /> },
  { name: "Alerts", icon: <Bell size={18} />, badge: 4 },
  { name: "Simulator", icon: <BarChart2 size={18} /> },
  { name: "Education", icon: <BookOpen size={18} /> },
  { name: "Upgrade My Plan", icon: <ArrowUpCircle size={18} /> },
  { name: "Rewards Program", icon: <Gift size={18} /> },
];

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <aside className="bg-[#008A00] text-white w-[260px] min-h-screen hidden md:block">
      <HeadingSection />
      <nav>
        <ul className="space-y-3">
          {menuItems.map((item, i) => (
            <li key={i}>
              <div
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={`flex items-center space-x-2 p-4 pl-8 rounded-md cursor-pointer ${
                  openIndex === i && item.children ? "bg-[#00000026]" : ""
                }`}
              >
                {item.icon}
                <span className={`text-[16px] ${openIndex === i ? "font-bold" : "font-normal"}`}>{item.name}</span>
                {item.badge && (
                  <span className="flex items-center justify-center ml-2 w-[30px] h-[30px] bg-[#FFDD00] text-black text-[14px] font-bold rounded-full px-2">
                    {item.badge}
                  </span>
                )}
                {item.children && <ArrowIcon index={i} openIndex={openIndex} />}
              </div>

              {item.children && openIndex === i && (
                <ul className="pl-10 py-1 bg-[#00000026] rounded-r-md">
                  {item.children.map((sub, j) => (
                    <li
                      key={j}
                      className={`cursor-pointer border-l-2 py-3 pl-4 ${
                        sub.isBold ? "font-bold" : "font-normal"
                      }`}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

//Heading Section Component
const HeadingSection = () => {
  return (
    <div className="flex items-center gap-x-2 p-6 pl-7">
      <span className="w-[18px] h-[18px] bg-yellow-400"></span>
      <h1 className="text-2xl font-bold">NETBRAMHA</h1>
    </div>
  );
};

// DropDown Arrow Icon Component
const ArrowIcon = ({
  index,
  openIndex,
}: {
  index: number;
  openIndex: number | null;
}) => {
  return (
    <svg
      className={`w-3 h-3 ml-auto transform transition-transform duration-200 ${
        openIndex === index ? "rotate-180" : "rotate-0"
      }`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};
