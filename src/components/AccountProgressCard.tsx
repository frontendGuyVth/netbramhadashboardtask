import React from "react";
import { ReactNode } from "react";

interface InfoCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

const AccountProgressCard: React.FC<InfoCardProps> = ({
  icon,
  title,
  value,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <div className="flex rounded-md shadow-sm bg-white border-t-[2px] border-[#00A6CA]">
      <div className="bg-[#c9e9fb] p-4 flex items-center justify-center w-14">
        <div className="text-[#2987c4] text-xl">{icon}</div>
      </div>
      <div className="flex flex-col p-4 w-full">
        <div className="flex justify-between font-semibold text-[#064a7a] mb-2">
          <span>{title}</span>
          <span>{value}</span>
        </div>
        {description && (
          <div className="text-gray-600 text-sm mb-2">{description}</div>
        )}
        {linkText && linkHref && (
          <a
            href={linkHref}
            className="text-[#027bc0] font-semibold text-sm hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkText}
          </a>
        )}
      </div>
    </div>
  );
};

export default AccountProgressCard;
