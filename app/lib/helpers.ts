import { notFound } from "next/navigation";
import { tours } from "../data/tours";
import { packages } from "../data/packages";

interface TourLocationProps {
  address: string;
  image: string;
}

export const formatPeso = (amount: number) => {
  const peso = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(amount);

  return peso;
};

// export const getFeaturedTours = () => {
//   const featuredTours = tours.filter((tour) => tour.type === "day tour");

//   return featuredTours;
// };

export const getDayTours = () => {
  const dayTours = tours.filter((tour) => tour.type === "day tour");

  return dayTours;
};

export const getPackageTours = () => {
  const tourPackage = tours.filter((tour) => tour.type === "tour package");

  return tourPackage;
};

export const getPaxTours = () => {
  const paxTour = packages.filter((tour) => tour.type === "tour package");

  return paxTour;
};

export const getTourById = (id: string) => {
  const tour = tours.find((tour) => tour.id === id);
  if (tour === undefined) return notFound();
  return tour;
};

// export const getAllTourLocation = () => {
//   const uniqueAddressesWithImage: TourLocationProps[] = tours.reduce(
//     (acc, item) => {
//       item.address.forEach((address) => {
//         // Check if the address is already in the accumulator
//         if (!acc.some((entry) => entry.address === address)) {
//           acc.push({ address, image: item.images[0] });
//         }
//       });
//       return acc;
//     },
//     [] as TourLocationProps[],
//   );

//   return uniqueAddressesWithImage;
// };

export const truncateText = (text: string, limit: number) => {
  if (text.length <= limit) return text;

  return text.slice(0, limit) + "...";
};
