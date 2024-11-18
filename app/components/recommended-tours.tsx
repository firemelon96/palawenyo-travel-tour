import { tours } from "../data/tours";
import Card from "./card";

interface RecommendedToursProps {
  id: string;
}

const RecommendedTours = ({ id }: RecommendedToursProps) => {
  const filteredTours = tours.filter((tour) => tour.id !== id);
  return (
    <>
      <div className="my-10 ml-5 md:ml-20 2xl:ml-80">
        <h2 className="text-white text-2xl">
          You might <span className="text-sky-500">also like</span>
        </h2>
      </div>
      <div className="my-10 w-full gap-4 overflow-x-scroll">
        <div className="ml-5 flex w-max gap-4 md:ml-20 2xl:ml-80">
          {filteredTours.map((tour) => (
            <Card key={tour.id} data={tour} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendedTours;
