export type Itinerary = {
  time: string;
  activity: string;
};

type AdditionalInformation = {
  whatToBring: string[];
  notes: string;
};

export type Tour = {
  id: string;
  name: string;
  description: string;
  duration: string;
  itinerary: Itinerary[];
  price: number;
  images: string[];
  inclusions: string[];
  exclusions: string[];
  additionalInformation: AdditionalInformation;
};
