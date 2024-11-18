import Image from "next/image";
import { formatPeso } from "../lib/helpers";
import Link from "next/link";
import { Tour } from "@/types";

type Props = {
  data: Tour;
};

const Card = ({ data }: Props) => {
  return (
    <Link href={`/tours/${data.id}`}>
      <div className="bg-sky-50 dark:bg-sky-500/10 flex w-fit flex-col gap-2 rounded-2xl p-4 shadow-sm hover:shadow-md sm:shadow-none">
        <div className="h-48 w-60 overflow-hidden rounded-xl">
          <Image
            src={data.images[0]}
            width={300}
            height={300}
            alt={data.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-60">
          <h2 className="text-xl font-semibold text-third">{data.name}</h2>
          <span className="text-third/50">{formatPeso(data.price)}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
