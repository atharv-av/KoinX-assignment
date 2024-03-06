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

const AboutBTC: React.FC = () => {
  return (
    <div className="w-full mt-8 p-6 bg-white rounded-lg flex flex-col gap-6">
      <p className="font-semibold text-2xl">About Bitcoin</p>
      <div className="flex flex-col gap-3">
        <p className="text-base font-bold">What is Bitcoin?</p>
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          distinctio debitis fuga eum deleniti laboriosam mollitia nemo dolor
          ipsam, harum consequatur iste asperiores numquam assumenda iusto at
          praesentium, sunt ex id cupiditate illo temporibus quia eaque aliquam.
          Pariatur amet, saepe delectus odit et, dolor facere iure nobis nihil
          id tenetur.
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <p className="text-base font-bold">Lorem ipsum dolor sit amet. </p>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor
          accusamus vel, tempora, temporibus reprehenderit voluptatibus
          asperiores nobis eligendi mollitia suscipit? Nisi labore unde eaque
          suscipit est sint vero harum commodi aliquam fugit? Quo corporis
          cumque corrupti recusandae cum ea.
        </p>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor
          accusamus vel, tempora, temporibus reprehenderit voluptatibus
          asperiores nobis eligendi mollitia suscipit? Nisi labore unde eaque
          suscipit est sint vero harum commodi aliquam fugit? Quo corporis
          cumque corrupti recusandae cum ea.
        </p>
        <p className="text-base font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolor
          accusamus vel, tempora, temporibus reprehenderit voluptatibus
          asperiores nobis eligendi mollitia suscipit? Nisi labore unde eaque
          suscipit est sint vero harum commodi aliquam.
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
        <p className="text-2xl font-bold">Already Holding Bitcoin?</p>
        <div className="flex flex-col lg:flex-row md:flex-row gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`${card.bgColor} flex lg:w-1/2 md:w-1/2 w-full gap-6 p-4 rounded-lg`}
            >
              <Image
                src={card.img}
                alt={card.title}
                height={25}
                width={100}
                className="rounded-lg"
              />
              <div className="flex flex-col justify-center gap-3">
                <p className="text-white text-lg font-semibold">{card.title}</p>
                <Button className="gap-2 w-3/4 bg-white text-black hover:text-white">
                  <p>Check Now</p> <ArrowRight size={25} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="text-base font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, dolor
        at quae hic beatae obcaecati voluptatibus fuga tenetur, incidunt, eius
        provident. Porro dolores modi eligendi.
      </div>
    </div>
  );
};

export default AboutBTC;
