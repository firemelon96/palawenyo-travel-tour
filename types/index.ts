import { IconType } from "react-icons";

export type Itinerary = {
  title?: string;
  duration: string;
  activities: string[];
  pickupTime?: string;
  destinations?: string[];
};

type AdditionalInformation = {
  whatToBring: string[];
  notes: string;
};

export type PackageInclusion = {
  icon: IconType;
  label: string;
};

export type PrivatePrice = {
  min: number;
  max: number;
  price: number;
};

export type HotelPrice = {
  hotelName: string;
  price: number;
};

export type Tour = {
  id: string;
  name: string;
  description: string;
  duration: string;
  itineraries: Itinerary[];
  minPax?: number;
  price?: number;
  hotelPrice?: HotelPrice[];
  packageInclusions?: PackageInclusion[];
  images: string[];
  inclusions: string[];
  exclusions: string[];
  additionalInformation?: AdditionalInformation;
};
