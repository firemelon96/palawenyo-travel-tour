import { formatPeso } from "@/app/lib/helpers";
import { BiInfoSquare } from "react-icons/bi";

interface DescriptionProps {
  tourName: string;
  price?: number;
  description: string;
}

const Description = ({ tourName, price, description }: DescriptionProps) => {
  return (
    <div className="bg-sky-50 space-y-1 p-4">
      <h1 className="text-sky-700 text-3xl">{tourName}</h1>
      {price ? (
        <p className="text-semibold text-sky-600 text-xl">
          {formatPeso(price)} / pax
        </p>
      ) : (
        <p className="flex items-center font-bold text-exclusion">
          <BiInfoSquare className="mr-2 text-exclusion" /> Customized and
          private tour rate is available upon request
        </p>
      )}
      <h5 className="text-slate-500">Overview</h5>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default Description;
