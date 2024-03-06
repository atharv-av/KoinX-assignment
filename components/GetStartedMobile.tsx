"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const GetStartedMobile = () => {
  return (
    <div className="bg-[#0052fe] text-white h-fit rounded-xl py-4 px-3 flex flex-col items-center justify-between gap-8">
      <p className="font-bold text-2xl w-3/4 text-center">Get Started with KoinX for FREE</p>
      <p className="text-base w-3/4 text-center">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <Image
        src="/getStartedImg.png"
        alt="Get Started"
        height={50}
        width={200}
      />
      <Button className="bg-white text-black hover:text-white font-bold gap-2 py-6 px-8">
        Get Started for FREE
        <ArrowRight size={17} />
      </Button>
    </div>
  );
};

export default GetStartedMobile;
