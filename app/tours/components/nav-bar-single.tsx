"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
// import { navLinks } from "../data/navlinks";

export const NavbarSingle = () => {
  const router = useRouter();

  return (
    <header className="relative z-[9999]">
      <div className="bg-sky-500 dark:bg-sky-800 fixed left-0 top-0 z-10 h-20 w-full">
        <div className="container mx-auto flex items-center justify-between xl:px-20">
          <div className="flex items-center">
            <Link href="/">
              <Image
                width={80}
                height={80}
                src="/resources/logo.png"
                alt="cliff and waves logo"
                className="rounded-full p-2"
              />
            </Link>
            <div className="text-white">
              <p className="text-lg font-semibold uppercase xl:text-3xl">
                Palawenyo
              </p>
              <p className="text- text-base font-normal tracking-wide xl:text-xl">
                Travel and Tours
              </p>
            </div>
          </div>

          <nav className="text-white bg-sky-700/30 rounded-lg p-4">
            <button onClick={() => router.back()}>Back</button>
          </nav>
        </div>
      </div>
    </header>
  );
};
