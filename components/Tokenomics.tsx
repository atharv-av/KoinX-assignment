"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface card {
  id: string;
  img: string;
  title: string;
  bgColor: string;
}

const cards: card[] = [
  {
    id: "1",
    img: "/card1.png",
    title: "Calculate your Profits",
    bgColor: "bg-gradient-to-br from-[#75eba4] via-[#3c9da9] to-[#186aac]",
  },
  {
    id: "2",
    img: "/card2.png",
    title: "Calculate your tax liability",
    bgColor: "bg-gradient-to-br from-[#ff9563] via-[#f7634a] to-[#f2413a]",
  },
];

const Tokenomics: React.FC = () => {
  return (
    <div className="lg:block w-full mt-8 p-6 bg-white rounded-lg flex-col gap-6 hidden">
      <p className="font-semibold text-2xl">Tokenomics</p>
      <div className="flex flex-col gap-3">
        <p className="text-xl font-normal">
         Initial Distribution
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Image src="/tokenomics.png" alt="tokenomics" height={50} width={400} />
        <p className="text-base font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatibus assumenda, repellat reiciendis consectetur accusamus similique neque, mollitia commodi, quaerat labore voluptate aliquid exercitationem. Libero tempora placeat voluptate itaque sed laboriosam, natus similique soluta ab quae adipisci, nulla sequi quod esse iure possimus consequatur quam? Alias ex quae laudantium maiores pariatur, sequi eius ipsum molestias soluta recusandae doloribus iure voluptas!
        </p>
      </div>
      
    </div>
  );
};

export default Tokenomics;
