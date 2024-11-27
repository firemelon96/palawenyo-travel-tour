import { Tour } from "@/types";
import Image from "next/image";
import { QrGenerator } from "./qr-generator";
import { formatPeso } from "../lib/helpers";
import Link from "next/link";

type Props = {
  data: Tour;
};

export const BigCardPackage = ({ data }: Props) => {
  return (
    <Link
      href={`/tours/${data.id}`}
      className="flex gap-4 rounded-md border p-4 odd:flex-row even:flex-row-reverse md:h-80 md:justify-between dark:border-slate-600 dark:bg-sky-500/10"
    >
      <div className="w-1/2 overflow-hidden rounded-md">
        <Image
          src={data.images[0]}
          width={800}
          height={500}
          alt={data.name}
          className="aspect-square object-cover"
        />
      </div>
      <div className="flex w-1/2 flex-col justify-between gap-1">
        <h1 className="text-xl text-sky-600 md:text-3xl">{data.name}</h1>
        <p className="text-lg text-sky-400 md:text-2xl">
          <span className="text-slate-500">{data.duration}</span>
        </p>
        <span className="hidden text-slate-500 md:block">
          {data.description}
        </span>

        <div className="flex items-center justify-center gap-2 md:justify-start">
          <QrGenerator name={data.name} url="https://m.me/107338648650143" />
          <div className="hidden flex-1 md:block">
            <ul className="grid grid-cols-2 text-slate-500">
              {data.packageInclusions?.map((item) => (
                <li key={item.label} className="flex text-xs">
                  {" "}
                  <item.icon className="mr-2 text-sm" />{" "}
                  <p className="flex-1">{item.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
