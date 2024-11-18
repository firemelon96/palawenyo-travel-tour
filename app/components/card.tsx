import Image from "next/image";
import { formatPeso } from "../lib/helpers";
import Link from "next/link";

interface CardProps {
  image: string;
  title: string;
  iti: string;
  price?: number;
  address: string;
  id: string;
}

const Card = ({ image, title, iti, price, address, id }: CardProps) => {
  return (
    <Link href={`/tours/${id}`}>
      <div className="flex w-fit flex-col gap-2 rounded-2xl bg-secondary p-4 shadow-sm hover:shadow-md sm:shadow-none">
        <div className="h-48 w-60 overflow-hidden rounded-xl">
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-60">
          <h2 className="truncate text-2xl font-semibold text-third">
            {title}
          </h2>
          <p className="text-xl text-primary">
            {iti} <span>{address}</span>
          </p>
          <span className="text-third/50">
            {price ? `${formatPeso(price)} / pax` : "Upon Request"}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
