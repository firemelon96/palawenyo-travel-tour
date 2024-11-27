import { Itinerary } from "@/types";

type Props = {
  itineraries: Itinerary[];
};

const Itenerary = ({ itineraries }: Props) => {
  return (
    <div className="space-y-1 bg-sky-50 p-4 dark:bg-sky-500/10">
      <h1 className="text-2xl text-sky-700">Itinerary</h1>

      {itineraries.map((itinerary) => (
        <div key={itinerary.duration} className="py-1">
          {itinerary.title && (
            <h2 className="text-slate-400">
              {itinerary.title}{" "}
              {itinerary.pickupTime
                ? `- Pick up time: ${itinerary.pickupTime}`
                : ""}
            </h2>
          )}
          {itinerary.duration && (
            <h3 className="text-slate-500">Duration: {itinerary.duration}</h3>
          )}
          {itinerary.destinations && itinerary.destinations?.length > 0 && (
            <p className="text-slate-400">Destinations</p>
          )}
          <ul className="list-disc pl-8 text-slate-500">
            {itinerary.destinations?.map((dest) => <li key={dest}>{dest}</li>)}
          </ul>
          {itinerary.activities.length > 0 && (
            <p className="text-slate-400">Activities</p>
          )}
          <ul className="list-decimal pl-8 text-slate-400">
            {itinerary.activities?.map((activity) => (
              <li key={activity} className="text-slate-400">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Itenerary;
