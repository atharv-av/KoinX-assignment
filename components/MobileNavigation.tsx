"use client";

import React from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import { Bitcoin, Menu, Settings2, Wrench } from "lucide-react";
import Image from "next/image";

const menuItems = [
  {
    label: "Crypto Taxes",
    icon: Bitcoin,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Free Tools",
    icon: Wrench,
    href: "/",
    color: "text-violet-500",
  },
  {
    label: "Resource Center",
    icon: Settings2,
    href: "/",
    color: "text-yellow-500",
  },
];

const MobileNavigation: React.FC = () => {
  return (
    <header className="text-gray-600 body-font lg:hidden md:hidden">
      <div className="container mx-auto flex p-5 flex-row items-center justify-between">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/KoinX-logo.svg" alt="Logo" width={75} height={50} />
        </Link>
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/KoinX-logo.svg"
                  alt="Logo"
                  width={60}
                  height={50}
                />
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-5">
              {menuItems.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:font-bold hover:scale-105 rounded-lg transition"
                >
                  <div className="flex items-center flex-1">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
            <Button className="bg-blue-600 w-full">Get Started</Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default MobileNavigation;
