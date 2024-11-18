import { formatPeso } from "@/app/lib/helpers";
import { BiInfoSquare } from "react-icons/bi";

interface DescriptionProps {
  tourName: string;
  price: number;
  description: string;
}

const Description = ({ tourName, price, description }: DescriptionProps) => {
  return (
    <div className="dark:bg-sky-500/10 bg-sky-50 space-y-1 p-4">
      <h1 className="text-sky-700 text-3xl">{tourName}</h1>

      <p className="text-semibold text-sky-600 text-xl">
        {formatPeso(price)} / pax
      </p>

      <h5 className="text-slate-400">Overview</h5>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default Description;
