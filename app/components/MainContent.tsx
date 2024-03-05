"use client";

import React from "react";
import TradingWidget from "./TradingWidget";
import GetStarted from "./GetStarted";
import MainHeader from "./MainHeader";
import TabNavigator from "./TabNavigator";
import TrendingCoins from "./TrendingCoins";

const MainContent = () => {
  return (
    <div className="bg-[#eff2f5] px-8 py-6">
      <MainHeader />
      <div className="flex gap-4">
        <TradingWidget />
        <div className="flex flex-col gap-3">

          <GetStarted />
          <TrendingCoins />
        </div>

      </div>
      <TabNavigator />
    </div>
  );
};

export default MainContent;
