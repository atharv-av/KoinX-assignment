"use client";

import { BookText, Info } from "lucide-react";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface estimate {
  id: string;
  title: string;
  color: string;
  value: number;
}

const analystEstimates: estimate[] = [
  {
    id: "1",
    title: "Buy",
    color: "bg-green-500",
    value: 76,
  },
  {
    id: "2",
    title: "Hold",
    color: "bg-gray-500",
    value: 8,
  },
  {
    id: "3",
    title: "Sell",
    color: "bg-red-500",
    value: 16,
  },
];

const Sentiment: React.FC = () => {
  return (
    <div className="w-full mt-8 p-6 bg-white rounded-lg flex flex-col gap-6">
      <p className="font-semibold text-2xl">Sentiment</p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-600 text-lg">Key Events</p>
            <Info className="text-white bg-slate-500 rounded-full" size={20} />
          </div>
          <div className="px-8">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full max-w-2xl"
            >
              <CarouselContent className="">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={index} className="mr-10">
                    <CarouselItem className="md:basis-1/2 lg:basis-1/2 basis-1">
                      <div className="p-1">
                        <div className="h-52 w-96 rounded-lg bg-blue-200 flex flex-col gap-4 p-3">
                          <div className="flex flex-row gap-2">
                            <div className="text-white bg-blue-500 rounded-full p-3 h-fit">
                              <BookText />
                            </div>
                            <p className="font-semibold text-base">
                              Lorem ipsum dolor sit, amet consectetur
                              adipisicing elit.
                            </p>
                          </div>
                          <div className="font-light text-base ml-14">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Nam, facilis quo! Cumque adipisci fuga
                            obcaecati magnam, minus ad molestias.
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  </div>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-600 text-lg">
              Analyst Estimates
            </p>
            <Info className="text-white bg-slate-500 rounded-full" size={20} />
          </div>
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold text-green-600 bg-green-100 rounded-full p-8">
              76%
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              {analystEstimates.map((estimate) => (
                <div className="w-full flex gap-4 items-center justify-start" key={estimate.id}>
                  <p className="text-sm w-6 text-slate-600">{estimate.title}</p>
                  <div
                    style={{ width: `${estimate.value}%` }}
                    className={`h-2 ${estimate.color} rounded-full`}
                  ></div>
                  <p className="text-sm text-slate-600">{estimate.value}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
