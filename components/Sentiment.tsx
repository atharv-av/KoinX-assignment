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

interface event {
  icon: string;
  title: string;
  description: string;
}

const keyEvents: event[] = [
  {
    icon: "",
    title: "",
    description: "",
  },
];

const Sentiment: React.FC = () => {
  return (
    <div className="w-full mt-8 p-6 bg-white rounded-lg flex flex-col gap-6">
      <p className="font-semibold text-2xl">Sentiment</p>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <p className="font-semibold text-slate-600 text-lg">Key Events</p>
            <Info className="text-white bg-slate-500 rounded-full" size={20} />
          </div>
       <div className="px-8">
       <Carousel className="w-full max-w-2xl">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/2"
                >
                  <div className="p-1">
                    <Card className="">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-2xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
       </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-slate-600 text-lg">
                Analyst Estimates
              </p>
              <Info
                className="text-white bg-slate-500 rounded-full"
                size={20}
              />
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            recusandae exercitationem consequuntur est numquam dolorum inventore
            dignissimos, dolores quidem maxime blanditiis porro a! Totam cumque
            tenetur, minima ea officiis magnam!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
