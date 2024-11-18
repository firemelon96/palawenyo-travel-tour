import Image from "next/image";
import { BiPhone } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaViber } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { tours } from "../data/tours";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-sky-500 text-sky-50">
      <div className="container mx-auto grid grid-cols-1 gap-4 py-20 text-center md:grid-cols-3 md:px-20 md:text-start">
        <div className="flex flex-col items-center gap-4 md:items-start">
          <div className="">
            <Image
              src="/resources/logo.png"
              width={120}
              height={120}
              alt="cliff and waves logo"
              className="rounded-full"
            />
          </div>
          <div>
            <h6 className="text-3xl font-semibold">
              Palawenyo travel and tours
            </h6>
            <p className="text-xl">Coron Palawan, Philippines</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-2">
          <span className="text-3xl font-semibold uppercase">
            Contact Details
          </span>
          <ul className="flex flex-col items-center gap-4 text-base md:items-start">
            <li className="flex items-center space-x-2">
              <BsWhatsapp /> <span>0998-957-3011</span>
            </li>

            <li className="flex items-center space-x-2">
              <MdEmail />{" "}
              <span className="truncate text-ellipsis text-base">
                palawenyotravelandtours@gmail.com
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:items-end">
          <span className="text-3xl font-semibold uppercase text-secondary">
            Useful links
          </span>
          <ul className="flex flex-col gap-2 text-base md:text-end">
            {tours.map((tour) => (
              <li key={tour.id}>
                <Link href={`tours/${tour.id}`}>{tour.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center border-t border-secondary py-2 text-sm text-background">
        <p> &copy; Copyright 2024. All Rights Reserved.</p>
        <span>Design and developed by: Almujahid Jamion</span>
      </div>
    </footer>
  );
};

export default Footer;
