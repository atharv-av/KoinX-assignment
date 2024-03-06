"use client";

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <header className="text-gray-600 body-font hidden lg:block md:block">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center gap-5">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900"
        >
          <Image src="/KoinX-logo.svg" alt="Logo" width={75} height={50} />
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#" className="mr-5 font-bold hover:text-gray-900">
            Crypto Taxes
          </Link>
          <Link href="#" className="mr-5 font-bold hover:text-gray-900">
            Free Tools
          </Link>
          <Link href="#" className="mr-5 font-bold hover:text-gray-900">
            Resource Center
          </Link>
        </nav>
        <Button className="bg-blue-600 px-6">Get Started</Button>
      </div>
    </header>
  );
};

export default Navbar;
