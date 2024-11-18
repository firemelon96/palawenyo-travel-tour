import { Tour } from "@/types";
import Image from "next/image";
import { QrGenerator } from "./qr-generator";
import { formatPeso } from "../lib/helpers";
import Link from "next/link";

type Props = {
  data: Tour;
};

export const BigCard = ({ data }: Props) => {
  return (
    <Link
      href={`/tours/${data.id}`}
      className="dark:bg-sky-500/10 dark:border-slate-600 flex gap-4 rounded-md border p-4 odd:flex-row even:flex-row-reverse md:h-80 md:justify-between"
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
        <h1 className="text-sky-600 text-xl md:text-3xl">{data.name}</h1>
        <p className="text-sky-400 text-lg md:text-2xl">
          {formatPeso(data.price)}{" "}
          <span className="text-slate-500">- {data.duration} Tour</span>
        </p>
        <span className="text-slate-500">{data.description}</span>

        <div className="flex items-center justify-center md:justify-start">
          <QrGenerator
            name={data.name}
            price={data.price}
            url="https://m.me/107338648650143"
          />
        </div>
      </div>
    </Link>
  );
};
