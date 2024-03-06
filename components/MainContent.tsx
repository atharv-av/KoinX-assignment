"use client";

import React from "react";
import TradingWidget from "./TradingWidget";
import GetStarted from "./GetStarted";
import MainHeader from "./MainHeader";
import TabNavigator from "./TabNavigator";
import TrendingCoins from "./TrendingCoins";
import Performance from "./Performance";
import Sentiment from "./Sentiment";
import AboutBTC from "./AboutBTC";
import Team from "./Team";
import Tokenomics from "./Tokenomics";

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
      <hr className="border-slate-600 lg:w-[56.5%] w-[98.5%]" />
      <div className="flex flex-col gap-6 lg:w-[57%] w-[98.5%]">
        <Performance />
        <Sentiment />
        <AboutBTC />
        <Tokenomics />
        <Team />
      </div>
    </div>
  );
};

export default MainContent;
