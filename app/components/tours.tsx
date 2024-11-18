import { getDayTours } from "../lib/helpers";
import { BigCard } from "./big-card";
import Card from "./card";

const Tours = () => {
  const dayTours = getDayTours();
  return (
    <section
      className="container mx-auto mt-10 scroll-mt-6 pb-16 text-center md:px-20 md:text-start"
      id="tours"
    >
      <div className="flex flex-col items-center gap-4 md:items-start">
        <div>
          <h3 className="text-sky-500 text-3xl font-semibold">
            Traveller's choice
          </h3>
          <p className="text-sky-400 text-base">Explore coron adventure...</p>
        </div>

        <div className="w-full space-y-4">
          {dayTours.map((tour) => (
            <BigCard data={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
