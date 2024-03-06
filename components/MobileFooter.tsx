"use client";

import React from "react";
import GetStartedMobile from "./GetStartedMobile";
import TrendingCoinsMobile from "./TrendingCoinsMobile";

const MobileFooter = () => {
  return (
    <div className="flex flex-col gap-3 xl:hidden lg:hidden md:hidden visible my-16">
      <GetStartedMobile />
      <TrendingCoinsMobile />
    </div>
  );
};

export default MobileFooter;
