"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { fetchTrendingData } from "../app/api/fetchData";
import { ArrowDown, ArrowUp } from "lucide-react";

interface Coin {
  data: any;
  id: string;
  name: string;
  large: string | null;
}

const TrendingCoins: React.FC = () => {
  const [trendingData, setTrendingData] = useState<Coin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTrendingData();
        setTrendingData(data?.coins.map((coin: any) => coin.item) || []);
      } catch (error) {
        console.error("Error fetching trending data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="hidden lg:visible lg:flex flex-col gap-8 bg-white p-8 rounded-lg">
      <p className="text-2xl font-bold">Trending Coins (24h)</p>
      <div className="flex gap-80">
        <div className="flex flex-col w-full gap-4">
          {trendingData.slice(0, 3).map((coin) => (
            <div className="flex items-center gap-2 p-1" key={coin.id}>
              <Image
                src={coin.large || "/KoinX-logo.svg"}
                alt={coin.name}
                height={25}
                width={25}
              />
              <div className="font-normal text-lg cursor-default">{coin.name}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 w-full items-start">
          {trendingData.slice(0, 3).map((coin) => (
            <div
              className={`flex items-center gap-1 p-1 rounded-lg cursor-default ${
                coin.data.price_change_percentage_24h.aed >= 0
                  ? "text-green-800 bg-green-300"
                  : "text-red-600 bg-red-300"
              }`}
              key={coin.id}
            >
              {coin.data.price_change_percentage_24h.aed >= 0 ? (
                <ArrowUp size={17} />
              ) : (
                <ArrowDown size={17} />
              )}
              {Math.abs(coin.data.price_change_percentage_24h.aed).toFixed(2)}%
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
