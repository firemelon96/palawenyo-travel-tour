import { Tour } from "@/types";
import { getPaxTours } from "../lib/helpers";

import { BigCardPackage } from "./big-card-package";

type Props = {
  label: string;
  tours: Tour[];
};

const ToursReused = ({ label, tours }: Props) => {
  return (
    <section
      className="container mx-auto mt-10 scroll-mt-6 pb-16 text-center md:px-20 md:text-start"
      id="tours"
    >
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div>
          <h3 className="text-3xl font-semibold text-sky-500">
            Traveller&apos;s Package Choice
          </h3>
          <p className="text-base text-sky-400">{label}</p>
        </div>

        <div className="w-full space-y-4">
          {tours.map((tour) => (
            <BigCardPackage key={tour.id} data={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursReused;
