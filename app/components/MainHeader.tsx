"use client";

import { ChevronsRight } from "lucide-react";
import React from "react";

const MainHeader:React.FC = () => {
  return (
    <div className="flex flex-row gap-x-2 mb-7">
      <p className="font-light text-slate-700">Cryptocurrencies</p>
      <ChevronsRight className="font-light text-slate-700" />
      <p className="font-semibold">Bitcoin</p>
    </div>
  );
};

export default MainHeader;
