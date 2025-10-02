import { HelpCircle, Languages, UserCircle2, LogOut } from "lucide-react";

const menuItems = [
  {
    label: "How It Works",
    icon: <HelpCircle size={22} strokeWidth={2.2} className="text-[#004364]" />,
  },
  {
    label: "English",
    icon: (
      <span className="flex items-center space-x-[-3px]">
        <Languages
          size={22}
          strokeWidth={2.2}
          className="text-[#004364] bg-[#F0F4F8] rounded-md"
        />
      </span>
    ),
  },
  {
    label: "My Account",
    icon: <UserCircle2 size={22} strokeWidth={2.2} className="text-[#004364]" />,
  },
  {
    label: "Logout",
    icon: <LogOut size={22} strokeWidth={2.2} className="text-[#004364]" />,
  },
];

const Header = () => (
  <header className="flex h-[60px] justify-end items-center bg-white shadow px-6 py-4 border-b-[1px]">
    <div className="flex items-center gap-x-10">
      {menuItems.map(({ label, icon }, idx) => (
        <a
          key={idx}
          href="#"
          className="flex items-center space-x-3 text-[#262626] hover:text-[#262626]"
        >
          {icon}
          <span className="text-[14px] font-normal">{label}</span>
        </a>
      ))}
    </div>
  </header>
);

export default Header;
