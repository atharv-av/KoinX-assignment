"use client";

import React, { useState } from "react";

const tabs: string[] = [
  "Overview",
  "Fundamentals",
  "News Insights",
  "Sentiments",
  "Team",
  "Technicals",
  "Tokenomics",
];

const TabNavigator: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex lg:gap-6 lg:text-[15.8px] text-sm gap-12 mt-10 lg:mt-6 items-center overflow-scroll lg:w-[58%] w-full">
      {tabs.map((tab) => (
        <p
          key={tab}
          className={`font-semibold text-md pb-2 text-black cursor-pointer ${
            activeTab === tab ? "border-b-[3px] border-blue-600 text-blue-700" : ""
          }`}
          onClick={() => handleClick(tab)}
        >
          {tab}
        </p>
      ))}
      
    </div>
  );
};

export default TabNavigator;
