"use client";

import React, { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fetchTrendingCoins } from "@/app/api/fetchData";
import Image from "next/image";

const Footer: React.FC = () => {
  const [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchTrendingCoins();
      if (data) {
        setCoins(data);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col gap-6 px-12 mt-8">
      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">You May Also Like</p>
        <div className="mt-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-8xl"
          >
            <CarouselContent>
              {coins.map((coin, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/4 lg:basis-1/5 basis-1/2"
                >
                  <div>
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center gap-8 justify-center">
                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <Image
                              src={coin.item.large}
                              alt="Trending Coins"
                              height={25}
                              width={25}
                            />
                            <p>{coin.item.name}</p>
                            <p
                              className={`${
                                parseFloat(
                                  coin.item.data.price_change_percentage_24h.aed
                                ) < 0
                                  ? "bg-red-300 text-red-600"
                                  : "bg-green-300 text green-600"
                              } rounded px-2`}
                            >
                              {parseFloat(
                                coin.item.data.price_change_percentage_24h.aed
                              ).toFixed(2)}
                              %
                            </p>
                          </div>
                          <p className="font-semibold text-xl">
                            {coin.item.data.price}
                          </p>
                        </div>
                        <Image
                          src="/sparkline1.svg"
                          alt="Image not found"
                          height={200}
                          width={200}
                          className="rounded-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>



      <div className="flex flex-col gap-2">
        <p className="text-2xl font-bold">Trending Coins</p>
        <div className="mt-6">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-8xl"
          >
            <CarouselContent>
              {coins.map((coin, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/4 lg:basis-1/5 basis-1/2"
                >
                  <div>
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center gap-8 justify-center">
                        <div className="flex flex-col">
                          <div className="flex gap-2">
                            <Image
                              src={coin.item.large}
                              alt="Trending Coins"
                              height={25}
                              width={25}
                            />
                            <p>{coin.item.name}</p>
                            <p
                              className={`${
                                parseFloat(
                                  coin.item.data.price_change_percentage_24h.aed
                                ) < 0
                                  ? "bg-red-300 text-red-600"
                                  : "bg-green-300 text green-600"
                              } rounded px-2`}
                            >
                              {parseFloat(
                                coin.item.data.price_change_percentage_24h.aed
                              ).toFixed(2)}
                              %
                            </p>
                          </div>
                          <p className="font-semibold text-xl">
                            {coin.item.data.price}
                          </p>
                        </div>
                        <Image
                          src="/sparkline1.svg"
                          alt="Image not found"
                          height={200}
                          width={200}
                          className="rounded-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Footer;
