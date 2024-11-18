import { getDayTours } from "../lib/helpers";
import { BigCard } from "./big-card";

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
            Traveller&apos;s choice
          </h3>
          <p className="text-sky-400 text-base">Explore Coron Adventure</p>
        </div>

        <div className="w-full space-y-4">
          {dayTours.map((tour) => (
            <BigCard key={tour.id} data={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
