import { Itinerary } from "@/types";

interface IteneraryProps {
  itineraries: Itinerary[];
}

const Itenerary = ({ itineraries }: IteneraryProps) => {
  return (
    <div className="bg-sky-50 dark:bg-sky-500/10 space-y-1 p-4">
      <h2 className="text-sky-700 text-2xl">Itinerary</h2>
      {itineraries.map((itinerary) => (
        <div key={itinerary.time} className="space-y-4">
          <h3 className="text-slate-500 dark:text-slate-300">
            {itinerary.time}
          </h3>
          <span className="text-slate-400">{itinerary.activity}</span>
        </div>
      ))}
    </div>
  );
};

export default Itenerary;
