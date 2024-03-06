"use client";

import { Info } from "lucide-react";
import React from "react";

interface ProgressBarItem {
  lowerLimit: string;
  lowerLimitValue: string;
  upperLimit: string;
  upperLimitValue: string;
}

interface tableItem {
  name: string;
  value: string;
  percentage?: string;
  percentageColor?: string;
  date?: string;
}

const progressBar: ProgressBarItem[] = [
  {
    lowerLimit: "Today's Low",
    lowerLimitValue: "46,930.22",
    upperLimit: "Today's High",
    upperLimitValue: "49,343.83",
  },
  {
    lowerLimit: "52W Low",
    lowerLimitValue: "16,930.22",
    upperLimit: "52W High",
    upperLimitValue: "49,743.83",
  },
];

const fundamentalsTable: tableItem[] = [
  {
    name: "Bitcoin Price",
    value: "$16,815.46",
  },
  {
    name: "Market Cap",
    value: "$323,507,290,047",
  },
  {
    name: "24h Low / 24h High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    name: "Market Cap Dominance",
    value: "38.343%",
  },
  {
    name: "7d Low / 7d High",
    value: "$16,382.07 / $16,874.12",
  },
  {
    name: "Volume / Market Cap",
    value: "0.0718",
  },
  {
    name: "Trading Volume",
    value: "$23,249,202,782",
  },
  {
    name: "All-Time High",
    value: "$69,044.77",
    percentage: "-75.6%",
    percentageColor: "text-red-600",
    date: "Nov 10, 2021 (about 1 year)",
  },
  {
    name: "Market Cap Rank",
    value: "#1",
  },

  {
    name: "All-Time Low",
    value: "$67.81",
    percentage: "24729.1%",
    percentageColor: "text-green-600",
    date: "Jul 06, 2013 (over 9 years)",
  },
];

const Performance: React.FC = () => {
    return (
      <div className="w-full mt-8 p-6 bg-white rounded-lg flex flex-col gap-6">
        <p className="font-semibold text-2xl">Performance</p>
        <div className="flex flex-col gap-6">
          {progressBar.map((item, index) => (
            <div className="flex items-center justify-between" key={index}>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">{item.lowerLimit}</p>
                <p className="text-s, text-slate-800">{item.lowerLimitValue}</p>
              </div>
              <div className="h-1 w-7/12 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-slate-600">{item.upperLimit}</p>
                <p className="text-s, text-slate-800">{item.upperLimitValue}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-600 text-lg">Fundamentals</p>
            <Info className="text-white bg-slate-500 rounded-full" size={20} />
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-10">
            {fundamentalsTable.map((tableItem, index) => (
                <div>
              <div className="flex py-3 justify-between items-center" key={index}>
                <p className="flex-grow lg:text-sm md:text-sm text-[10px] text-slate-500">{tableItem.name}</p>
                <div className="flex flex-col items-center justify-center h-10">
                  <div className="flex gap-2 items-center">
                    <p className="lg:text-sm md:text-sm text-[10px] text-black font-semibold">
                      {tableItem.value}
                    </p>
                    {tableItem.percentage && (
                      <p
                        className={`${tableItem.percentageColor} lg:text-sm md:text-sm text-[9px] font-semibold`}
                      >
                        {tableItem.percentage}
                      </p>
                    )}
                  </div>
                  {tableItem.date && (
                    <p className="lg:text-xs md:text-xs text-[8px] font-light text-right">{tableItem.date}</p>
                  )}
                </div>
              </div>
                <div className="h-[1px] bg-slate-700"></div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Performance;
  