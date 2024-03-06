"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface member {
  id: string;
  img: string;
  name: string;
  designation: string;
}

const team: member[] = [
  {
    id: "1",
    img: "/johnSmith.png",
    name: "John Smith",
    designation: "Designation here",
  },
  {
    id: "2",
    img: "/elinaWilliams.png",
    name: "Elina Williams",
    designation: "Designation here",
  },
  {
    id: "3",
    img: "/johnSmith.png",
    name: "John Smith",
    designation: "Designation here",
  },
];

const Team: React.FC = () => {
  return (
    <div className="w-full mt-8 p-6 bg-white rounded-lg flex flex-col gap-6">
      <p className="font-semibold text-2xl">Team</p>
      <div className="flex flex-col gap-3">
        <p className="text-base font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          distinctio debitis fuga eum deleniti laboriosam mollitia nemo dolor
          ipsam.
        </p>
      </div>
      <hr />
      <div className="flex flex-col gap-3">
      {team.map((member) => (
          <div key={member.id} className="flex lg:flex-row flex-col items-center gap-3 bg-blue-200 rounded-lg p-4">
            <div className="flex flex-col items-center justify-center">
            <Image src={member.img} alt={member.name} height={100} width={100} />
              <p className="font-semibold">{member.name}</p>
              <p className="text-xs text-slate-600">{member.designation}</p>
            </div>
            <div className="w-3/4 flex items-center justify-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, ut. Laboriosam aut distinctio voluptate sit assumenda impedit perspiciatis quos placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit voluptas tempore id quasi rem similique laborum quae consequatur nesciunt!
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
