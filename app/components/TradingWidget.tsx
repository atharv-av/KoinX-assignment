import { ArrowUp, Bitcoin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, memo, useState } from "react";
import { fetchBtcRates } from "../api/fetchData";

interface BtcRates {
  usd: number;
  inr: number;
}

const TradingViewWidget: React.FC = () => {
  const [btcRates, setBtcRates] = useState<BtcRates | null>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchBtcRates()
      .then((data) => {
        if (data) {
          setBtcRates(data.bitcoin);
        }
      })
      .catch((error) => console.error("Error fetching BTC rates:", error));
  }, []);

  useEffect(() => {
    if (!container.current) return;

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
      "autosize": true,
      "symbol": "BITSTAMP:BTCUSD",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "3",
      "locale": "en",
      "enable_publishing": false,
      "backgroundColor": "rgba(255, 255, 255, 1)",
      "hide_top_toolbar": true,
      "allow_symbol_change": true,
      "save_image": false,
      "calendar": false,
      "hide_volume": true,
      "support_host": "https://www.tradingview.com"
    }`;
    container.current?.appendChild(script);

    return () => {
      container.current?.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-white h-full w-full p-8 flex flex-col gap-6 rounded-md">
      <div className="flex flex-col gap-4 items-start justify-center">
        <div className="flex flex-row items-center gap-8">
          <div className="flex flex-row items-center gap-3">
            <Bitcoin
              size={33}
              className="text-white font-semibold bg-[#f7931a] rounded-full p-1"
            />
            <p className="font-bold lg:text-2xl text-xl">Bitcoin</p>
            <p className="text-slate-600 text-sm">BTC</p>
          </div>
          <p className="cursor-default bg-[#768396] text-white lg:p-2 p-1 rounded-md lg:text-base text-sm">Rank #1</p>
        </div>
        <div className="flex flex-col justify-start gap-3 mt-8">
          <div className="flex items-center gap-4">
            <p className="font-bold lg:text-3xl md:text-3xl text-2xl">
              {btcRates ? `$${btcRates.usd}` : "Loading..."}
            </p>
            <div className="flex items-center cursor-default bg-[#ebf9f4] text-[#14b079] lg:text-base text-xs p-1 rounded-md">
              <ArrowUp />
              <p>2.51%</p>
            </div>
            <p className="text-slate-500">(24H)</p>
          </div>
          <p className="lg:text-lg md:text-lg text-sm">
            {btcRates ? `₹${btcRates.inr}` : "Loading..."}
          </p>
        </div>
      </div>
      <hr />
      <p className="font-bold">Bitcoin Price Chart (USD)</p>
      <div className="h-[60vh]">
        <div className="tradingview-widget-container h-full" ref={container}>
          <div className="tradingview-widget-container__widget h-[calc(100% - 32px)] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
