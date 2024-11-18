"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { navLinks } from "../data/navlinks";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

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

          {/* mobile navigation */}
          <button
            onClick={() => setIsMobile((prev) => !prev)}
            className="flex items-center justify-center md:hidden"
          >
            <BiMenu className="fill-white text-5xl" />
          </button>

          <nav className="text-white hidden md:block">
            <ul className="text-white flex text-base uppercase">
              {navLinks.map((nav) => (
                <li key={nav.label} className="hover:bg-sky-400 p-6 uppercase">
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          {isMobile && (
            <ul className="text-white bg-sky-500/75 absolute left-0 top-20 w-full items-center text-center text-2xl tracking-widest text-secondary backdrop-blur-sm md:hidden">
              {navLinks.map((nav) => (
                <li key={nav.label} className="p-6 uppercase hover:bg-primary">
                  <Link href={nav.href}>{nav.label}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
